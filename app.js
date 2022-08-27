
// grab the object with class grid in html
const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20




// create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}


// all the blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]



// function for making all the blocks
function addBlocks() {

    for (let i = 0; i < blocks.length; i++) {
        // create a div element > assign it to variable block
        const block = document.createElement('div')

        // assign block variable the class of block
        block.classList.add('block')

        // style those blocks
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'

        // add blocks to grid class
        grid.appendChild(block)
    }
}

addBlocks()

