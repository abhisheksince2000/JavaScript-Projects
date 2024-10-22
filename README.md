# Projects Related to DOM
## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-1sfkg7?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

# solution code
## project 1
``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
  console.log(buttons);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.background = e.target.id;
    }

  });
});

```

## Project 2
solution code 
``` javascript
// script.js

function calculateBMI() {
    // Get the height and weight values
    let height = parseFloat(document.getElementById('height').value);
    let heightUnit = document.getElementById('heightUnit').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let weightUnit = document.getElementById('weightUnit').value;

    // Convert height to meters
    if (heightUnit === 'cm') {
        height = height / 100;
    } else if (heightUnit === 'ft') {
        height = height * 0.3048;
    } else if (heightUnit === 'in') {
        height = height * 0.0254;
    }

    // Convert weight to kilograms
    if (weightUnit === 'lb') {
        weight = weight * 0.453592;
    }

    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to 2 decimal places

    // Display BMI result with health suggestion
    let result = document.getElementById('result');
    let suggestion = '';

    if (bmi < 18.5) {
        suggestion = 'Underweight';
        result.classList.add("text-yellow-400");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestion = 'Normal';
        result.classList.add("text-green-500");
    } else if (bmi >= 25 && bmi < 29.9) {
        suggestion = 'Overweight';
        result.classList.add("text-orange-500");
    } else {
        suggestion = 'Obese';
        result.classList.add("text-red-500");
    }

    result.innerHTML = `Your BMI is ${bmi} (${suggestion})`;
}

```

## Project 3
solution code
```javscript
const clock = document.getElementsByClassName('digi')[0]; // Access the first element with class 'digi'
        setInterval(function(){
            let date = new Date();
            clock.innerHTML = date.toLocaleTimeString(); // Use 'clock' instead of 'digi'

        }, 1000);

```
