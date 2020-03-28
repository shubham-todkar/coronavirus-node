const path=require('path')
const express=require('express')
const hbs=require('hbs')
const getLocation=require('./utils/getlocation')
const app=express()

//Defines path for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setup handlebars engines and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory to serve
app.use(express.static(publicDirectoryPath))   


app.get('',(req,res)=>{
    res.render('index',{
        title:'Coronavirus',
        name: 'Shubham Todkar'
    })
})

app.get('/corona',(req,res)=>{
    if(!req.query.country){
        return res.send({
            error:'You must provide an country'
        })
    }
    else{
        getLocation(req.query.country,(error,data)=>{
            if(error){
            // console.log('Error:',error)
            return res.send({error})
            }
            else{
                //console.log('Data:', data)
               // console.log(data)
                // console.log('Country:',data.country)
                // console.log('Cases:',data.cases)
                // console.log('Deaths:',data.deaths)
                // console.log('Today Cases',data.todayCases)
                return res.send({
                    Country:data.country,
                    Cases:data.cases,
                    TodayCases:data.todayCases,
                    Deaths: data.deaths,
                    todayDeaths:data.todayDeaths,
                    recovered:data.recovered,
                    active:data.active,
                    critical:data.critical,
                    casesPerOneMillion:data.casesPerOneMillion,
                    deathsPerOneMillion:data.deathsPerOneMillion
                
                })
        }
        })

    // res.send({
    //     country:'China',
    //     deaths:'45000',
    //     loc:req.query.country
    // })
}
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Shubham Todkar'
    })
})

app.get('*',(req,res)=>{
     res.render('errorpage',{
        title:'Error', 
        error:'404 Page not Found',
         name:'Shubham Todkar'
     })
 })

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})