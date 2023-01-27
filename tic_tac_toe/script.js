console.log("welcome to my game");

let turn = "x";
let isgameover = false;

const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}
const checkWin = () => {
    let boxtext = document.querySelectorAll(".boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.won').innerText = ` ${boxtext[e[0]].innerText}  Won the match`
            isgameover = true
        }
    })
    
}


// -------game Logic Start here-------

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.querySelectorAll(".info")[0].innerText = `Turn for ${turn}`;
            }  
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'x';
})