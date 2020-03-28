console.log('Client side Javascript')


const coForm=document.querySelector('form')
const search=document.querySelector('input')
const m1=document.querySelector('#p1')
const m2=document.querySelector('#p2')
const m3=document.querySelector('#p3')
const m4=document.querySelector('#p4')
const m5=document.querySelector('#p5')
const m6=document.querySelector('#p6')
const m7=document.querySelector('#p7')
const m8=document.querySelector('#p8')
const m9=document.querySelector('#p9')
const m10=document.querySelector('#p10')
const m0=document.querySelector('#p0')


coForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    m0.textContent=' '
    m1.textContent='Loading...'
    m2.textContent=' '
    m3.textContent=' '
    m4.textContent=' '
    m5.textContent=' '
    m6.textContent=' '
    m7.textContent=' '
    m8.textContent=' '
    m9.textContent=' '
    m10.textContent=' '

    fetch('/corona?country='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            m1.textContent=data.error
            //console.log('Errr'+data.error)
        }
        else if(!data.Country){
            m1.textContent='Country Not Found '
        }
        else{
            m1.textContent='Country: '+data.Country
            m2.textContent='Cases: '+data.Cases
            m3.textContent='Today Cases: '+data.TodayCases
           // console.log(data.todayCases)
            m4.textContent='Deaths: '+data.Deaths
            m5.textContent='TodayDeaths: '+data.todayDeaths
            m6.textContent='Recovered: '+data.recovered
            m7.textContent='Active: '+data.active
            m8.textContent='Critical: '+data.critical
            m9.textContent='Cases Per One Million: '+data.casesPerOneMillion
            m10.textContent='Deaths Per One Million: '+data.deathsPerOneMillion
            
            // mssgTwo.textContent=data.Deaths
        }
    })
})
})