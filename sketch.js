let data; 
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9HDfIb2C5N8F3ksawzjefnM5Mduo7b25Sgx901HIMBl-BydN0xyePw5sAz4HoPHGKvPNla3l5mt3J/pub?gid=0&single=true&output=csv";

//-----------------------------------------------------------------
function preload() {
  data = loadTable(url, 'csv', 'header');    
}

//-----------------------------------------------------------------
// This runs once in the beginning 
function setup() {
  createCanvas(windowWidth, windowHeight);   
  // put init code here  
}

//-----------------------------------------------------------------
// Runs when the window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//-----------------------------------------------------------------
// Our main program loop 
function draw() {
  // put code here
  background('gray');
  
  for (let i=0; i < data.getRowCount(); i++) {
    let row = data.getRow(i);  
    let c = row.getString('Color');
    let p = row.getNum('Percentage');
      
    noStroke();
    fill(c);     
    let x = map(i, 0, data.getRowCount()-1, 100, width-100);    
    circle(x, height/2, 200 * p);    
  }
  
}