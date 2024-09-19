// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let productTemp = document.querySelector('.productTemp');
const productTempDisplay = document.getElementById('productTempDisplay');


// ADDING EVENT LISTENER TO SEARCH BUTTON  
button.addEventListener('click', function(){

    // Fection data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=4de20d9d4985536b1b0b0e5b0162066d`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('that wrong !')); 

})

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`
    if (productTemp.value == weather.main.temp){
        productTempDisplay.textContent = `Great ${productTemp.value}°C is sutable temruture to save your product `;
    }else {
        productTempDisplay.textContent = `Sorry ${productTemp.value}°C is sutable temruture to save your product `;
    }
}
