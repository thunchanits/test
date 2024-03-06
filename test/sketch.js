function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  fill(255)
  noStroke()
  textAlign(CORNER)
  textFont('Courier New' , 48)
  text("Profile" , windowWidth/20,windowHeight/8)
  textFont('Courier New' , 24)
  text("Thunchanit Sookprasert" , windowWidth/20,windowHeight/5)
  textFont('Courier New' , 24)
  text("Teem" , windowWidth/20,windowHeight/3.75)
  textFont('Courier New' , 24)
  text("20 years old" , windowWidth/20,windowHeight/3)
  textFont('Courier New' , 24)
  text("Industrial design student" ,windowWidth/20,windowHeight/2.5)
  textFont('Courier New' , 24)
  text("Chulalongkorn University" ,windowWidth/20,windowHeight/2.15)
  
  //avatar
  noStroke()
  fill("#F72798")
  circle(windowWidth/2,windowHeight/3+50,100)
  circle(windowWidth/2+100,windowHeight/3-50,100)
  circle(windowWidth/2+100,windowHeight/3+50,100)
  circle(windowWidth/2,windowHeight/3-50,100)
  fill("#EBF400")
  circle(windowWidth/2+50,windowHeight/3,100)
  fill(255)
  circle(windowWidth/2+30,windowHeight/3,25)
  circle(windowWidth/2+70,windowHeight/3,25)
  fill(0)
  circle(windowWidth/2+30,windowHeight/3,20)
  circle(windowWidth/2+70,windowHeight/3,20)
}