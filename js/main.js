/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('#animate',{delay: 200}); 
sr.reveal('#projects',{delay: 200});
sr.reveal('#projects-row1',{delay: 100});
sr.reveal('#projects-row2',{delay: 100});
sr.reveal('#aboutme',{delay: 800}); 
sr.reveal('#gettoknowme',{delay: 450})
sr.reveal('#music',{delay: 450})
sr.reveal('#researchproject',{delay: 450})

/* Typewriter effect*/
const text = ['Process finished with exit code 0'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type () {
  if(count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 150);
  
}());


