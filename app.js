const board = document.querySelector('#board')
const SQ_NUMBER = prompt('what is the field size?')
const colors = []

let numb = prompt('how many colors?')

for( let i = 0; i < numb; i++){
    let myColor = genRandcolor()
    colors.push(myColor)
}

function genRandcolor(){
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
 } 

for(let i = 0; i < SQ_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('sq')
    
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}


function setColor(event) {
     const element = event.target
    const color = getColor()
     element.style.backgroundColor = color
     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    const element = e.target
    element.style.backgroundColor = ' #4b4343'
    element.style.boxShadow = `0 0 2px black`
}


function getColor(){
      return colors[Math.floor(Math.random() * colors.length)]
}


