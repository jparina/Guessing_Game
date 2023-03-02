const chosenNum = Math.floor(Math.random() * 100)
const gameStatus = document.getElementById("game-status")
console.log(chosenNum)

const previousNums = document.getElementById("previous-nums")

function buttonClick() {
  
  if (parseInt(num.value) === chosenNum) {
    console.log("You won!")
    gameStatus.textContent = "You Won"
  }
  else if (parseInt(num.value) < chosenNum) {
    console.log("Too Low")
    gameStatus.textContent = `${num.value} is Too LOW, Guess Again!`
  }
  else {
    console.log("Too High")
    gameStatus.textContent = `${num.value} is Too HIGH, Guess Again!`

  }
  previousNums.textContent += `${num.value}  `
  document.getElementById("Number").value = ''
}

const num = document.getElementById("Number")

