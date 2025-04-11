document.addEventListener("DOMContentLoaded", () => {
    const gameBox = document.getElementById('gameBox');
    const target = document.getElementById('target');

    const counter = document.getElementById('counter');
    var score = -1;
    var lighDark = 0;

    function moveTarget() {

        const boxWidth = gameBox.clientWidth;
        const boxHeight = gameBox.clientHeight;
        const targetSize = target.clientWidth;

        const maxLeft = boxWidth - targetSize;
        const maxTop = boxHeight - targetSize;

        const newLeft = Math.floor(Math.random() * maxLeft);
        const newTop = Math.floor(Math.random() * maxTop);

        {
            score += 1;
            counter.innerText = score;
            if (score == 100) {
                counter.style.color = "red";
            }
            if ((lighDark % 2) == 0) {
                //counter.style.color = `#${Math.floor(Math.random() * 1000)}`;
            } else {
                counter.style = `
                color: white;
                font-size: 100px;
                `
                //counter.style.color = `#${Math.floor(Math.random() * 1000)}`;
            }

        }

        target.style.left = `${newLeft}px`;
        target.style.top = `${newTop}px`;
    }


    const dark = document.getElementById('dark');
    function darkTheme() {
        if ((lighDark % 2) != 0) {
            const mainContainer = document.getElementById('main-container');
            mainContainer.style = "background-color: white;";
            gameBox.style = `
        border: 3px solid #333;
        position: relative;
        background-color: white;
        overflow: hidden;
        `;
            counter.style.color = "black"

            dark.innerText = "Dark";
            lighDark += 1;

            return;
        }

        const mainContainer = document.getElementById('main-container');
        mainContainer.style = "background-color: #333";
        gameBox.style = `
        border: 3px solid #333;
        position: relative;
        background-color: #111;
        overflow: hidden;
        `;
        counter.style.color = "white"

        dark.innerText = "Light";
        lighDark += 1;
    }
    var player1 = document.getElementById('player-1');
    var player2 = document.getElementById('player-2');

    function changePlayer1() {
        target.src = "face.png";
    }

    
    function changePlayer2() {
        target.src = "face-2.png";
    }

    target.addEventListener('click', moveTarget);

    dark.addEventListener('click', darkTheme);

    player2.addEventListener('click', changePlayer2);
    player1.addEventListener('click', changePlayer1);

    // Initial spawn
    moveTarget();
});