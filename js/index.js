
let gameBoared = document.getElementById("game");
let gameBox = document.querySelectorAll(".box");
let userSpot = 186

gameBoared.children[userSpot].classList.add("user")

let userMoveRight = function () {
    if(gameBox[userSpot + 1].classList.contains("active")) {
        return "";
    } else {
        gameBox.forEach(e => {
            e.classList.remove("user")
        })
        userSpot += 1
        gameBox[userSpot].classList.add("user")
    }
}

let userMoveLeft = function () {
    if(gameBox[userSpot - 1].classList.contains("active")) {
        return "";
    } else {
        gameBox.forEach(e => {
            e.classList.remove("user")
        })
        userSpot -= 1
        gameBox[userSpot].classList.add("user")
    }
}

let userMoveUp = function () {
    if(gameBox[userSpot - 31].classList.contains("active")) {
        return "";
    } else {
        gameBox.forEach(e => {
            e.classList.remove("user")
        })
        userSpot -= 31
        gameBox[userSpot].classList.add("user")
    }
}

let userMoveDown = function () {
    if(gameBox[userSpot + 31].classList.contains("active")) {
        return "";
    } else {
        gameBox.forEach(e => {
            e.classList.remove("user")
        })
        userSpot += 31
        gameBox[userSpot].classList.add("user")
    }
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        userMoveDown()
    } else if (e.key === "ArrowUp") {
        userMoveUp()
    } else if (e.key === "ArrowRight") {
        userMoveRight()
    } else if (e.key === "ArrowLeft") {
        userMoveLeft()
    } 
})
