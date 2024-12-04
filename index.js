const tempInput = document.getElementById("tempInput");

const celsiusToFahrenheit = document.getElementById("celsiusToFahrenheit");
const celsiusToKelvin = document.getElementById("celsiusToKelvin");
const kelvinToCelsius = document.getElementById("kelvinToCelsius");
const kelvinToFahrenheit = document.getElementById("kelvinToFahrenheit");
const fahrenheitToCelsius = document.getElementById("fahrenheitToCelsius");
const fahrenheitToKelvin = document.getElementById("fahrenheitToKelvin");

const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
let temp;
submitBtn.onclick = function(){
    if(celsiusToFahrenheit.checked){
        temp = Number(tempInput.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `${temp.toFixed(2)} °F`;

    }
    else if(celsiusToKelvin.checked){
        temp = Number(tempInput.value);
        temp = temp + 273.15;
        result.textContent = `${temp.toFixed(2)}°K `;
    }
    else if(kelvinToCelsius.checked){
        temp = Number(tempInput.value);
        temp = temp - 273.15;
        result.textContent = `${temp.toFixed(2)} °C`;
    }
    else if(kelvinToFahrenheit.checked){
        temp = Number(tempInput.value);
        temp = (temp - 273.15) * 9/5 + 32;
        result.textContent = `${temp.toFixed(2)} °F`;  
    }
    else if(fahrenheitToCelsius.checked){
        temp = Number(tempInput.value);
        temp =( temp - 32) * 5/9;
        result.textContent = `${temp.toFixed(2)} °C`;
    }
    else if(fahrenheitToKelvin.checked){
        temp = Number(tempInput.value);
        temp = (temp - 32) * 5/9 + 273.15;
        result.textContent = `${temp.toFixed(2)} °K`;
    }
    else{
         window.alert("Something went wrong")
    }

}
 