function convert() {
    const temperatureInput = document.getElementById("temperature");
    const celsiusInput = document.getElementById("celsius");
    const kelvinInput = document.getElementById("kelvin");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const reverseInput = document.getElementById("reverse");
    const unitSelect = document.getElementById("unit");
  
    const temperatureValue = parseFloat(temperatureInput.value);
    const unitValue = unitSelect.value;
  
    if (!isNaN(temperatureValue)) {
      switch (unitValue) {
        case "celsius":
          celsiusInput.value = temperatureValue;
          kelvinInput.value = temperatureValue + 273.15;
          fahrenheitInput.value = temperatureValue * 1.8 + 32;
          reverseInput.value = (temperatureValue + 273.15) * 1.8;
          break;
    
        case "kelvin":
          celsiusInput.value = temperatureValue - 273.15;
          kelvinInput.value = temperatureValue;
          fahrenheitInput.value = temperatureValue * 9 / 5 - 459.67;
          reverseInput.value = temperatureValue * 1.8;
          break;

          case "fahrenheit":
          celsiusInput.value = (temperatureValue - 32) / 1.8;
          kelvinInput.value = (temperatureValue + 459.67) * 5 / 9;
          fahrenheitInput.value = temperatureValue;
          reverseInput.value = temperatureValue + 459.67;
          break;

        case "reverse":
          celsiusInput.value = (temperatureValue / 1.8) - 273.15;
          kelvinInput.value = temperatureValue / 1.8;
          fahrenheitInput.value = temperatureValue - 459.67;
          reverseInput.value = temperatureValue;
          break;

        default:
          console.log("Unknown unit: " + unitValue);
      }
    }
  }
  
    