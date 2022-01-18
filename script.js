let circlePlace = document.querySelectorAll('.circle-place td')
let circles= document.querySelectorAll('.circle');


function ondragStartFunc(event) {      //1
    event.dataTransfer.setData('elemId', event.target.id)
  }



function dropHandler(event) {      //2
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    
    if (targetElem.className === 'circle') {
        event.target.append(targetElem)
    }else{
        alert('Not Match')
    }

   
}

function dropHandlerSquare(event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    
    if (targetElem.className === 'rect') {
        event.target.append(targetElem)
    }else{
        alert('Not Match')
    }
}


  function dragOverHandler(event) {     //3
    event.preventDefault()
  }





