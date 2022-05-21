const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const search = $('.search')
const city = $('.city')
const country = $('.country')
const value = $('.value')
const shortDesc = $('.short-desc')
const visibility = $('.visibility span')
const wind = $('.wind span')
const wet = $('.wet span')
const time = $('.time')
const content = $('.content')
const body = $('body')

async function changeWeatherUI(capitalSearch) {

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data =  await fetch(api).then((res) => res.json())

    // console.log(data)
    if(data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility
        wind.innerText = data.wind.speed + 'm/s'
        wet.innerText = data.main.humidity + '%'
        let temp = Math.floor(data.main.temp)
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ' '
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'hot')
        if(temp >= 25) {
            body.setAttribute('class', 'hot')
        } 
        
        if(temp >= 20 && temp <= 24 ) {
            body.setAttribute('class', 'warm')
        }

        if(temp <= 19) {
            body.setAttribute('class', 'cold')
        }

    } else {
        content.classList.add('hide')
    }
    
} 

search.onkeydown = (e) => {
    if(e.code === 'Enter') {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    } 
}


changeWeatherUI('ha noi')