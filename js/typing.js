const box = document.querySelector('.typing');
const text = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nemo quas quisquam voluptas aperiam praesentium pariatur! Quam eius vitae perferendis magnam minus hic dolore assumenda laudantiumsed! Corrupti, rem debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis quo ab neque, consequatur quisquam deleniti minus nemo ut quae, laborum perspiciatis? Architecto a sed optio nam hic odit aspernatur?"
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 60; 
const stop = 2000; 
let activeDOMElement = box;

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++
        wordIndex = 0;
        requestAnimationFrame(typing)
      }, stop)

    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    wordIndex++;
  }
  requestAnimationFrame(typing);

}

typing()