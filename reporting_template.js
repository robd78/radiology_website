let allCheckButtons = document.getElementsByClassName("reviewed");
console.log(allCheckButtons.length);
let checkStepsLength = allCheckButtons.length;

for (let index = 0; index < checkStepsLength; index++) {
    console.log(allCheckButtons[index]);
    allCheckButtons[index].id = (index + 1);
    allCheckButtons[index].addEventListener("click", changeColour);
}

function changeColour(e) {
    let userInput = e.target.id;
    console.log(userInput);
    let btnClicked = document.getElementById(`${userInput}`);
    console.log(btnClicked);
    if (btnClicked.style.backgroundColor === ("green")) {
        btnClicked.style.backgroundColor = ("white");
    } else {
        btnClicked.style.backgroundColor = ("green");
    }
}

let accordion = document.getElementsByClassName("item_check");

for (index = 0; index < accordion.length; index++) {
    accordion[index].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        
    });

    let allStepsTogether = document.getElementsByClassName("item_check");
    let allPanelsTogether = document.getElementsByClassName("panel");

    for (let i = 0; i < allStepsTogether.length; i++) {
        allStepsTogether[i].id = ("step_" + (i + 1));
        allPanelsTogether[i].id = ("panel_" + (i + 1));
    }

}