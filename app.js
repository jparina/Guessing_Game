const chosenNum = Math.floor(Math.random() * 100)

function buttonClick() {
  
  if (parseInt(num.value) === chosenNum) {
    console.log("You won!")
  }
  else if (parseInt(num.value) < chosenNum) {
    console.log("Too Low")
  }
  else {
    console.log("Too High")
  }
}

const num = document.getElementById("Number")

