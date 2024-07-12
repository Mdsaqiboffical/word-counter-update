function lettercounter() {
    // get the input id
    let userInput = document.getElementById("user-input").value;
    // for word count
    let userWord = document.getElementById("word-wrapper").innerHTML = userInput.split(" ").length;
    // for letter count
    let userLetter = document.getElementById("text-wrapper").innerHTML = userInput.length;

    if(userInput === "") {
        alert("Please enter something")
    }

    // console.log(userInput)
}