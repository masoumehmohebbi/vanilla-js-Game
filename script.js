let img = document.querySelector('#img'),
    images = document.querySelectorAll('.image'),
    userImg = document.querySelector('.user-img')

let youScore = document.querySelector('.you-score'),
    computerScore = document.querySelector('.computer-score')

let sum =0 ,
    sumComputer =0

let you,
    computer

let index

 const myImages =[
     {address:'images/scissors.jpg', datas: "scissors"},
     {address:'images/pape.jpg', datas: "paper"},
     {address:'images/rock.jpg', datas: "rock"},
 ]  

images.forEach(image =>{
    image.addEventListener('click',()=>{
        userImg.src = image.src
             index = Math.floor(Math.random() * myImages.length);
             img.src = myImages[index].address

            // -----calculating scores-------
            you= (image.dataset.name)     //you
            computer= (myImages[index].datas)  //computer

            if (((you === 'rock') && (computer === 'scissors')) ||
               ((you === 'scissors') && (computer === 'paper')) || 
               ((you === 'paper') && (computer === 'rock'))) {
                youScore.innerHTML = sum +=1
            
            }else if (((computer === 'rock') && (you === 'scissors')) ||
                     ((computer === 'scissors') && (you === 'paper')) ||
                     ((computer === 'paper') && (you === 'rock'))) {
                computerScore.innerHTML = sumComputer +=1
            }
    })
})