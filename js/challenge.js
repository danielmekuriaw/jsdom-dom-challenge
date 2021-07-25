let counter = document.querySelector("#counter")

let timerStatus = true

const timer = function startTimer(){
    const timer = setInterval(function(){ counter.textContent = parseInt(counter.textContent) + 1 }, 1000)
    return timer
}

let timerVar = timer()
timerVar

const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const likes = document.querySelector(".likes")

let printed = []

minus.addEventListener('click', () => counter.textContent = parseInt(counter.textContent) - 1)
plus.addEventListener('click', () => counter.textContent = parseInt(counter.textContent) + 1)


//const li = document.createElement("li")
heart.addEventListener('click', function(){
    let currCounter = parseInt(counter.textContent)
    printed.push(currCounter)
    let countNum = count(printed, currCounter)
    
    if (countNum > 1){
        li.textContent = counter.textContent + " has been liked " + countNum + time(countNum)
        likes.append(li)
    } else {
        li = document.createElement("li")
        li.textContent = counter.textContent + " has been liked " + countNum + time(countNum)
        likes.append(li)
    }
    
})

function count(array, value) {
    let count = 0
    array.forEach((v) => (v === value && count++));
    return count
}

function time(value){
    if (value <= 1){
        return " time."
    } else{
        return " times."
    }
}

pause.addEventListener('click', function(){
    if (timerStatus === true){
        pause.textContent = 'resume'
        timerStatus = false
        btnDisabler()
        clearInterval(timerVar)
    } else {
        pause.textContent = 'pause'
        timerStatus = true
        btnEnabler()
        timerVar = timer()
        timerVar
    }
    
})

function btnDisabler(){
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    restartBtn.disabled = true
}

function btnEnabler(){
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    restartBtn.disabled = false
}

const form = document.querySelector("#comment-form")
const comments = document.querySelector("#list")

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const commentText = event.target[0].value

    let p = document.createElement("p")
    p.textContent = commentText

    comments.append(p)

    form.reset()
})

const restartBtn = document.createElement("button")
restartBtn.textContent = "restart"

const body = document.getElementsByTagName("body")[0]

body.append(restartBtn)

restartBtn.addEventListener('click', ()=>{
    counter.textContent = 0
    clearInterval(timerVar)
    likes.innerHTML = ''
    timerVar = timer()
    timerVar
    printed = []
})