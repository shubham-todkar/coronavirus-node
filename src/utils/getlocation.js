const request=require('request')

const getLocation=(address,callback)=>{

    const url='https://coronavirus-19-api.herokuapp.com/countries/'+address
    
    request({url , json:true},(error,{body})=>{

        if(error){

            callback('Unable to connect',undefined)
    
        }
    
        else{
            
            callback(undefined,body)
         }
})
}

module.exports= getLocation