let buttonClick = document.querySelector('.btn-click')
let img = document.querySelector('#img')
const myImages = ['images/tas-1.jpg',
                  'images/tas-2.jpg', 
                  'images/tas-3.jpg', 
                  'images/tas-4.jpg', 
                  'images/tas-5.jpg', 
                  'images/tas-6.jpg'];


buttonClick.addEventListener('click',()=>{ 
    const index = Math.floor(Math.random() * myImages.length);
    console.log(index)
    img.src = myImages[index]
});

