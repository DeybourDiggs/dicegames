// // player 1
// let randomNumber = Math.ceil(Math.random()*6)

// let randomDiceImage = 'dice ' + randomNumber + '.jpg';
// let randomImageSource = 'images/' + randomDiceImage

// let image = document.querySelectorAll('img')[0]
// image.setAttribute('src', randomImageSource)

// // player 2

// let randomNumber2 = Math.ceil(Math.random()*6)

// let randomDiceImage2 = 'dice ' + randomNumber2 + '.jpg';
// let randomImageSource2 = 'images/' + randomDiceImage2

// let image2 = document.querySelectorAll('img')[1]
// image2.setAttribute('src', randomImageSource2)

// // condtions

// let header = document.querySelector('h1')
//     if(randomNumber > randomNumber2){
//         header.innerText = 'Player 1 wins 🎈'
//     }else if(randomNumber2 > randomNumber){
//         header.innerText = 'Player 2 wins 🎈'
//     }else{
//         header.innerText = 'it\'s a tie 👫'
//     }

//

function playGame(){
    let randomNumber = Math.ceil(Math.random()*6);

    let randomDiceImage = 'dice ' + randomNumber + '.jpg';
    let randomImageSource = 'images/' + randomDiceImage;

    let image = document.querySelectorAll('img')[0];
    image.setAttribute('src', randomImageSource);

    let randomNumber2 = Math.ceil(Math.random()*6);

    let randomDiceImage2 = 'dice ' + randomNumber2 + '.jpg';
    let randomImageSource2 = 'images/' + randomDiceImage2;

    let image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src', randomImageSource2);

    let header = document.querySelector('h1')
    if(randomNumber > randomNumber2){
        header.innerText = 'Player 1 wins 🎈'
    }else if(randomNumber2 > randomNumber){
        header.innerText = 'Player 2 wins 🎈'
    }else{
        header.innerText = 'it\'s a tie 👫'
    }
} 
document.querySelector('button').addEventListener('click', playGame)


