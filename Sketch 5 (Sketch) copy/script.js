let heyArray = [];
let maxR = 20; 
let angle = 0; 
let EDLavonia;

function preload() {
    EDLavonia = loadFont('fonts/EDLavonia-Regular.otf');
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("sketch");

    textFont(EDLavonia);
    textSize(200);


    heyArray = EDLavonia.textToPoints("Jaden", width / 2 - 200, height / 2 + 100, 200, {
        sampleFactor: 1
    });

    angleMode(DEGREES);
}

function draw() {
    background(200);

    let r = map(mouseX, 0, width, 0, maxR); 
    let dynamicAngle = map(mouseY, 0, height, 0, 360);

    noFill();
    stroke(0);
    strokeWeight(0.1); 

    beginShape();

    for (let i = 0; i < heyArray.length; i++) {
        let x = heyArray[i].x + r * sin(angle * i * 1); 
        let y = heyArray[i].y + sin(frameCount * 0.1 + i * 0.5) * 5;

        curveVertex(x, y);
        
      
        fill(0);
        ellipse(x, y, 1, 5);
    }

    endShape(CLOSE);

    angle += 10;
}