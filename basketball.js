const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const newGame = document.getElementById("new-game")

const homePlusOneBtn = document.getElementById("home-plus-one-btn")
const homePlusTwoBtn = document.getElementById("home-plus-two-btn")
const homePlusThreeBtn = document.getElementById("home-plus-three-btn")
const guestPlusOneBtn = document.getElementById("guest-plus-one-btn")
const guestPlusTwoBtn = document.getElementById("guest-plus-two-btn")
const guestPlusThreeBtn = document.getElementById("guest-plus-three-btn")

let teamOneScore = 0
let teamTwoScore = 0

homePlusOneBtn.addEventListener("click", function() {
    teamOneScore += 1
    homeScore.textContent = teamOneScore
})

homePlusTwoBtn.addEventListener("click", function() {
    teamOneScore += 2
    homeScore.textContent = teamOneScore
})

homePlusThreeBtn.addEventListener("click", function() {
    teamOneScore += 3
    homeScore.textContent = teamOneScore
})

guestPlusOneBtn.addEventListener("click", function() {
    teamTwoScore += 1
    guestScore.textContent = teamTwoScore
})

guestPlusTwoBtn.addEventListener("click", function() {
    teamTwoScore += 2
    guestScore.textContent = teamTwoScore
})

guestPlusThreeBtn.addEventListener("click", function() {
    teamTwoScore += 3
    guestScore.textContent = teamTwoScore
})

newGame.addEventListener("dblclick", function() {
    teamOneScore = 0
    teamTwoScore = 0
    homeScore.textContent = teamOneScore
    guestScore.textContent = teamTwoScore
})