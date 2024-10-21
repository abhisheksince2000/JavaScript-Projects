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