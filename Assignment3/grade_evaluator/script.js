let score = parseInt(prompt("Please enter your grade"))

if (score >= 0 && score <= 100 ){
    if (score >= 90 && score <= 100){
        alert("You got grade A")
    } else if (score >= 80 && score < 90){
        alert("You got grade B")
    }else if (score >= 70 && score < 80){
        alert("You got grade C")
    }else if (score >= 60 && score < 70){
        alert("You got grade D")
    }
    else {
        alert("You got grade F")
    }
} else {
    alert("Invalid grade, please enter a number between 0 and 100")
}