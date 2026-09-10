
const track = document.getElementById('track');


const cards = Array.from(track.children);


cards.forEach(card => {

    const clone = card.cloneNode(true);
    
  
    clone.setAttribute('aria-hidden', true);
    
   
    track.appendChild(clone);
});