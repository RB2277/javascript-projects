//Query selectors for all of the buttons and number value
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")
const count = document.querySelector("#count")

//Sets the initial counter to zero
let countNum = 0
count.innerHTML = countNum

//Listener for user click on the decrease button. This decreases the current number by one, and then calls the update function with the new value
decrease.addEventListener('click', function() {
    countNum -= 1

    update(countNum)
})

//Listener for user click on the reset button. This resets the current number to zero, and then calls the update function with the new value
reset.addEventListener('click', function() {
    countNum = 0
    update(countNum)
})

//Listener for user click on the increase button. This increases the current number by one, and then calls the update function with the new value
increase.addEventListener('click', function() {
    countNum += 1
    update(countNum)
})

//Update function to render the new number
function update(num){
    count.innerHTML = num


//Conditional to change the background color based on if the counter is negative, positive, or at zero.
if(x < 0){
    document.body.style.backgroundColor = `crimson`
} else if(x > 0){
    document.body.style.backgroundColor = `green`
} else {
    document.body.style.backgroundColor = `white`
}
}