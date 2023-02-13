//NOTE: Click on the ">" symbol that's a little bit
//above and to the left of this comment. You'll see
//a project folder where a Google sheet has been
//uploaded. This program uses data from that file.

var table;

function preload() {
  table = loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQy6ReVjzvdfiVu7SJEDBJgvZDY2x3af2xHkjpJ3icMIoFZlxassN2tRtB6rzznLysgmD6UEhLfygq8/pub?output=csv', 'csv', 'header');
}

function setup() {
  createCanvas(500,500);
  background(220);
  text(table.getRowCount() + ' total rows in table...header row is not counted', 20, 20);
  text(table.getColumnCount() + ' total columns in table', 20, 40);
  for (var r = 0; r < table.getRowCount(); r++) {
    for (var c = 0; c < table.getColumnCount(); c++) {
      text(table.getString(r, c), 80+r*50, 100+c*20);
    }
  }
  text("x", 30, 100);
  text("y", 30, 120);
  text("w", 30, 140);
  text("h", 30, 160);
  text("r", 30, 180);
  text("g", 30, 200);
  text("b", 30, 220);
  for (var d = 0; d < table.getRowCount(); d++) {
    x = table.getNum(d, 0);
    y = table.getNum(d, 1);
    w = table.getNum(d, 2);
    h = table.getNum(d, 3);
    r = table.getNum(d, 4);
    g = table.getNum(d, 5);
    b = table.getNum(d, 6);
    fill(r, g, b);
    rect(x,y,w,h);
  }
}