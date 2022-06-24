const mainPopup = document.querySelector('#main-popup');
const childPopup = document.querySelector('#child-popup');

const cards = [
  {
    title: 'Tonic',
    image: 'images/section_header1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/sectio_header3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    title: 'Tonic',
    image: 'images/section_header.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/section_header2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },

];

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');

// remove the popup
function cancelPopup() {
  mainPopup.classList.remove('popup');
  childPopup.classList.remove('conatiner-popup');
  mainPopup.style.display = 'none';
}

function cardDisplay(index) {
  const {
    title,
    image,
    description,
    languages,
    seeLive,
    seeSource,
  } = cards[index];

  childPopup.innerHTML = `
          <nav>
           <h3>${title}</h3>
               <a href="#"><img src="images/cancelIcon.svg"" onclick="cancelPopup()" > </a>
          </nav>
    
           <ul>
                <li>CANOPY</li>
              <li><img src="images/Counter.png" alt="dot-counter 7"></li>
               <li>Back End Dev</li>
                <li><img src="images/Counter.png" alt="dot-counter 8"></li>
            </ul>
            <img  classe="image" width="100%" height="360px"; src="${image}">
           <section class="layout">
           <p>${description}"</p>
             <ul class="language-list">
            <li>${languages[0]}</li>
             <li>${languages[1]}</li>
            <li>${languages[2]}</li>
                 </ul>
               <ul class="language-list desktop-img">
               <li>github</li>
                <li>ruby</li>
                 <li>Bootstraps</li>
              </ul>
        
       <div class="live-btn" >
          <button type="button" class="button"> 
            ${seeLive}
            <img src="images/seelive.svg" alt="">
          </button>
          <button type="button" class="button"> 
             ${seeSource}
            <img src="images/Vector(2).png" alt="">
           </button>
         </div>
     </section>`;

  // add button active
  mainPopup.classList.add('popup');
  childPopup.classList.add('conatiner-popup');
  mainPopup.style.display = 'block';
}

// call the designed class after the user click on it

card1.addEventListener('click', () => {
  cardDisplay(0);
});
card2.addEventListener('click', () => {
  cardDisplay(1);
});
card3.addEventListener('click', () => {
  cardDisplay(2);
});
card4.addEventListener('click', () => {
  cardDisplay(3);
});

mainPopup.addEventListener('click', cancelPopup);
