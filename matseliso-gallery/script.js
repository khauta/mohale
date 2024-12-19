const container = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/khauta/mohale/refs/heads/main/gallery/';
const randomNumber = (min = 1, max = 90) => Math.floor(Math.random() * max) + min;

// Create image and populate with random fox
// const createImageElement = () => {
//   // const img = document.createElement('img');
//   // img.src = `${baseURL}`+'10'+`${randomNumber()}.jpg`;
//   // return img;

//   // Use the ternary operator to prefix '0' if the number is between 1 and 9 
//   // const formattedNum = (randomNumber() >= 1 && randomNumber() <= 9) ? '0' + randomNumber() : randomNumber(); 
//   // img.src = `${baseURL}10${formattedNum}.jpg`; 
//   // return img;

//   const img = document.createElement('img'); 
//   let randomNum = randomNumber(); 
//   // Make sure this function returns a number 
//   // // Prefix '0' if the number is between 1 and 9 
//   if (randomNum >= 1 && randomNum <= 9) { 
//     randomNum = '0' + randomNum; 
//   } 
//   img.src = `${baseURL}10${randomNum}.jpg`; 
//   return img;
// };
const createImageElement = () => {
  const img = document.createElement('img');
  let randomNum = randomNumber();

  let formattedNum = String(randomNum); // Start by converting to string

  if (randomNum >= 1 && randomNum <= 9) {
    formattedNum = formattedNum.padStart(2, '0');
  }

  img.src = `${baseURL}10${formattedNum}.jpg`;
  return img;
};

// Create all images in fragment and insert
const summonFoxes = (foxCount) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < foxCount; i++) {
    const img = createImageElement();
    fragment.appendChild(img);
  }
  container.appendChild(fragment);
}


// Intersection Observer callback
const handleIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class on intersect
      entry.target.classList.add('fade-in');
    }
  });
};

// Intersection Observer
const initIntersectionObserver = () => {
  const observer = new IntersectionObserver(handleIntersect, {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger at 10% view
  });

  // Observe all images
  document.querySelectorAll('.container img').forEach(img => {
    observer.observe(img);
  });
};

// Initialize
const init = () => {
  summonFoxes(12);
  initIntersectionObserver(); // Initialize Intersection Observer
  
  // Add foxes on the go
  window.addEventListener('scroll', () => {
    const pos = window.scrollY + window.innerHeight;
    const height = document.documentElement.scrollHeight;
    pos >= height && summonFoxes(6);
    initIntersectionObserver(); // Reinitialize to observe new images
  });
};

init();