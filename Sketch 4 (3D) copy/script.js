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
    textSize(500);


    heyArray = EDLavonia.textToPoints("Jaden", width / 2 - 200, height / 2 + 100, 200, {
        sampleFactor: 0.4
    });

    angleMode(DEGREES);
}

function draw() {
    background(200);

    let r = map(mouseX, 0, width, 0, maxR); 
    let dynamicAngle = map(mouseY, 0, height, 0, 360);

    noFill();
    stroke(0);
    strokeWeight(1); 

    beginShape();

    for (let i = 0; i < heyArray.length; i++) {
        let x = heyArray[i].x + r * sin(angle * i * 0.01); 
        let y = heyArray[i].y + sin(frameCount * 0.1 + i * 0.05) * 15;

        curveVertex(x, y);
        
      
        fill(0);
        ellipse(x, y, 3, 3);
    }

    endShape(CLOSE);

    angle += 1;
}

