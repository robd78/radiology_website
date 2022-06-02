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
let allStepsTogether = document.getElementsByClassName("item_check");
let allPanelsTogether = document.getElementsByClassName("panel");

for (let i = 0; i < allStepsTogether.length; i++) {
    allStepsTogether[i].id = ("step_" + (i + 1));
    allPanelsTogether[i].id = ("panel_" + (i + 1));
}

for (let i = 0; i < allPanelsTogether.length; i++) {
    let newId = "panel_" + (i+1);
    let refId = (i+1)*2;
    document.getElementById(`${newId}`).style.gridRowStart = `${refId}`; 
}


let accordion = document.getElementsByClassName("item_check");
console.log(accordion);

for (index = 0; index < accordion.length; index++) {    
    accordion[index].addEventListener("click", activate);      
}
function activate(e) {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;       
    if (panel.style.display === "block") {
        panel.style.display = "none";
        this.classList.remove('grid_row_1');
        this.classList.add('grid_row_2');        
    } else {
        panel.style.display = "block";
        this.classList.remove('grid_row_2');
        this.classList.add('grid_row_1');
    }
}
