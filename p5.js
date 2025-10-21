let textbox, addBtn, title, poem;


function setup() {
  noCanvas();
  
  const controls = 
  title = createP("Basement Poetry")
  poem = createDiv('');
  textbox = createInput('').attribute('type', 'text').parent(controls);
  addBtn = createButton('Add line')
  
  addBtn.mousePressed(() => {
  let userLine = textbix.value().trim();
    if (!userLine) return;
    textbox.value("");
    
    let row = createDiv().parent(poem);
    let textSpan = createSpan(userLine).parent(row);
    let slider = createSlider(0, 360, floor(random(360)), 1).parent(row);
    
    let apply = () => textSpan.style('color', 'hsl(${slider.value}, 80%, 50%)'); 
    slider.input(apply);
    applyColor();
  })
  
}

function draw() {
  background(220);
}
