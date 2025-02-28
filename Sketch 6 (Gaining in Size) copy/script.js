let heyArray = [];
let maxR = 150;
let r = 0;
let EDLavonia;

function preload() {
    EDLavonia = loadFont('fonts/EDLavonia-Regular.otf');
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("sketch");

    textFont(EDLavonia);
    textSize(200);

    
    let bounds = EDLavonia.textBounds("Jaden", 0, 0, 200); 
    let xOffset = (width - bounds.w) / 2;
    let yOffset = (height + bounds.h) / 2; 

    heyArray = EDLavonia.textToPoints("Jaden", xOffset, yOffset, 200, {
        sampleFactor: 0.4
    });

    angleMode(DEGREES);
}

function draw() {
    background(200);


    if (mouseIsPressed) {
        r = min(r + 3, maxR);
    } else {
        r = max(r - 2, 0);
    }

    noFill();
    stroke(0);
    strokeWeight(2);

    beginShape();

    for (let i = 0; i < heyArray.length; i++) {
        let angleOffset = i * 0.1;
        let x = heyArray[i].x + r * sin(angleOffset);
        let y = heyArray[i].y + r * cos(angleOffset);

        curveVertex(x, y);
    }

    endShape(CLOSE);
}
