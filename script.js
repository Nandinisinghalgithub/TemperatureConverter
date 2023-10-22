const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    //Celsius to Fahrenheit
    const celToFah = (cel) => {
        let Fahrenheit = ((cel * 9 / 5) + 32);
        return Fahrenheit;
    }

    //Celsius to Kelvin
    const celToKel = (cel) => {
        let Kelvin = ((cel * 1) + 273.15);
        return Kelvin;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9);
        return celsius;
    }

    // Fahrenheit to Kelvin
    const fahToKel = (fah) => {
        let Kelvin = celToKel(fahToCel(fah));
        return Kelvin;
    }

    //Kelvin to Celsius
    const kelToCel = (kel) => {
        let celsius = ((kel*1) - 273.15);
        return celsius;
    }

    //Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        let Fahrenheit = celToFah(kelToCel(kel));
        return Fahrenheit;
    }

    if (valueTemp == 'cel') { 
        document.getElementById("result1").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result2").innerHTML = celToKel(inputTemp) + "&#176; Kelvin";

    }

    else if(valueTemp == 'kel') { 
        document.getElementById("result1").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
    }

    else {
        document.getElementById("result1").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = fahToKel(inputTemp) + "&#176; Kelvin";
    }




}
