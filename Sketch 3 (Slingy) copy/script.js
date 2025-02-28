let heyArray = [];
let r = 5; let angle = 0

function preload (){
    EDLavonia = loadFont('fonts/EDLavonia-Regular.otf')
}

function setup (){
    let canvas = createCanvas (600,600);
    canvas.parent ("sketch")

    textFont(EDLavonia);
    textSize(200);
    stroke(0);
    strokeWeight(1.5);

heyArray = EDLavonia.textToPoints ("Jaden", width/2-100, height/2, 200,{
    sampleFactor: 2

})
console.log(heyArray)

angleMode(DEGREES)

}

function draw(){
    background (300);


    for(let i = 0; i < heyArray.length; i++){
        let x = heyArray[i].x + r*sin(angle * i^3.3);
        let y = heyArray[i].y;

        let wave1 = sin(frameCount * 0.5 +i * 0.05)*9
    

        // ellipse(heyArray[i].x + r*sin(angle), heyArray[i].y,100,100)


        beginShape();
        vertex (x/wave1,y);
        // vertex (x,y);

        endShape(CLOSE)
       
    }
        angle += 1;
}