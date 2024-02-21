const btn = document.querySelector('.btnDiv');


//TODO: Setup logic for a random color to be selected
btn.addEventListener('click', function(event) {
    document.body.style.backgroundColor = `${colorPicker()}`
})

function colorPicker() {
    let color = Math.floor(Math.random () * 8);
    console.log(color)
if(color === 0) {
   return color = "red"
} else if(color === 1) {
    return color = "orange"
} else if(color === 2) {
    return color = "yellow"
} else if(color === 3) {
     return color = "green"
} else if(color === 4) {
     return color = "blue"
} else if(color === 5) {
     return color = "indigo" 
} else {
     return color = "violet"
}
}