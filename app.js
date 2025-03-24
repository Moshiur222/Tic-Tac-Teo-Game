let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerO, PlayerX
let winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is Clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "#ffba08";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#032b43";
            turnO = true;
        }
        checkwinner();
        box.disabled = true;
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winnet is ${winner}.`;
    msgContainer.classList.remove("hide");
};


const diableBtn = () => {
    for( box of Boxes){
        box.disabled = true;
    }
};

const enable = () => {
    for (box of Boxes){
        turnO = true;
        box.innerText = "";
        msgContainer.classList.add("hide");
        box.disabled = false;
    }
};


const checkwinner = () => {
    for(pattern of winPatterns){
        let pos1val = Boxes[pattern[0]].innerText;
        let pos2val = Boxes[pattern[1]].innerText;
        let pos3val = Boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                diableBtn()
            }
        }
    }
};

newGameBtn.addEventListener("click", enable);
resetBtn.addEventListener("click", enable);
