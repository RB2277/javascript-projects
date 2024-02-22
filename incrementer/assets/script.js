const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")
const count = document.querySelector("#count")

let countNum = 0

count.innerHTML = countNum

decrease.addEventListener('click', function() {
    countNum -= 1

    update(countNum)
})

reset.addEventListener('click', function() {
    countNum = 0
    update(countNum)
})


increase.addEventListener('click', function() {
    countNum += 1
    update(countNum)
})


function update(x){
    count.innerHTML = x

if(x < 0){
    document.body.style.backgroundColor = `crimson`
} else if(x > 0){
    document.body.style.backgroundColor = `green`
} else {
    document.body.style.backgroundColor = `gray`
}
}