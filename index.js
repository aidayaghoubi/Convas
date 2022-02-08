const convas = document.getElementById('canvas');
const ctx = convas.getContext('2d');
const incerese = document.getElementById('increase');
const decrese = document.getElementById('decrees');
const color = document.getElementById('colorPick');
const clearbtn = document.getElementById('clear');

let colors = 'black';
let ispressed = false;
let size = 20;

let x = undefined;
let y = undefined;

color.addEventListener('change', e => {
    colors = e.target.value;
    console.log('djew')
})

decrese.addEventListener('click', () => {
    size--;
    if (size < 5) {
        size = 5;
    }
    updateSize();
});
incerese.addEventListener('click', () => {
    size++;
    if (size > 50) {
        size = 50;
    }
    updateSize();
})


function updateSize() {
    const sizeTxt = document.getElementById('size')
    sizeTxt.innerText = size;
}

// let x=35;
// let y=35;
convas.addEventListener('mousedown', (e) => {
    ispressed = true;
    x = e.offsetX;
    y = e.offsetY;
});
convas.addEventListener('mouseup', (e) => {
    ispressed = false;
    x = undefined;
    y = undefined;
});

convas.addEventListener('mousemove', (e) => {
    if (ispressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawingcircle(x2,y2)
        line(x, y, x2, y2);
        x = x2;
        y = y2;
    }

});

function drawingcircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = colors;
    ctx.fill();
}

function line(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = colors;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


clearbtn.addEventListener('click',e=>{
    ctx.clearRect(0,0,convas.width , convas.height)
})

// drawingcircle(50, 50);



// function draw() {
//     // ctx.clearRect(0,0,convas.clientWidth,convas.height);
//     //
//     drawingcircle(x,y);
//     requestAnimationFrame(draw);
// }

// draw();


//requestAnimationFrame
