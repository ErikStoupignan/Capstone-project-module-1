// Hamburguer button works
const modal = document.querySelector('#modal-menu');
const hambIcon = document.querySelector('#burguer-icon');
const xIcon = document.querySelector('#x-icon');
const list = document.querySelector('#list-menu');

// Open de hamburguer menu
hambIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close de hamburguer menu
xIcon.addEventListener('click', () => {
  modal.style.display = 'none';
});

// If click in an option from de memu, close the menu
list.addEventListener('click', () => {
  modal.style.display = 'none';
  hambIcon.style.display = 'block';
});

// Spekers section 
// Project master container
const master = [
  {
    id: 'speaker1',
    name: 'Erik Stoupignan S. Beltrán',
    job: 'Senior Software Developer @teacher_loresf App',
    description: 'Electronics and Software Engineer by degree that made his career as a successful app creator, who will bestow on you his best tips and tricks, an amazing teacher to have around.',
    imgs: ['assets/Erik_SB.jpg']   
  },
  {
    id: 'speaker2',
    name: 'Nancy S. Ferrer',
    job: 'Community Manager and Content Creator @guilu_spanishroom and @teacher_lore',
    description: 'Writer of the best selling book: “Stop IG from Becoming your Frenemy”, is here to show you how to do more with less, you don’t need to go broke to make every post look top.',
    imgs: ['assets/speaker-Nancy.jpg']   
  },
  {
    id: 'speaker3',
    name: 'Güilu S. Ferrer',
    job: 'Founder and CEO @guilu_spanishroom',
    description: 'Leading developer of new education methods, trained at the University of Helsinki, Finland, means to give us a glance at a cultural exchange experience and how this same effect is appreciated through out social media.',
    imgs: ['assets/speaker-wuilu.jpg']   
  },
  {
    id: 'speaker4',
    name: 'Brenda S. Ferrer',
    job: 'Founder, CEO, Community Manager and Content Creator @bellezaconbren',
    description: 'Mental Health Advocate and globally known MUA, comes to confide in you the good, the bad and the ugly of getting your presence known online, leaving the impostor syndrome behind.',
    imgs: ['assets/speaker-brenda.jpg']   
  },
  {
    id: 'speaker5',
    name: 'Roshelle Stoupignan S. Beltrán',
    job: 'Founder and Executive Director @roca.amatista',
    description: 'As a trained psychologist, she combined her understanding of peoples’ psyche with her delicate taste in jewelry building a successful international empire.',
    imgs: ['assets/speaker-Roshelle.jpeg']   
  },
  {
    id: 'speaker6',
    name: 'Celia E. Beltrán Gutierrez ',
    job: 'Cofounder and board member @belmarnovedades',
    description: 'Former Head of the Psychologist Department at a prestigious school, she promotes searching for your passion at any point of life, through her latest pursue at the Mexican handbag’s industry.',
    imgs: ['assets/speaker-celia.jpg']   
  }
];

// Verify the width of the windows all the time
  window.addEventListener('resize', (event) => {
    speakerCounts ()
  })

  // Print the speakers cards 
  document.getElementById('speakers').innerHTML = master.map((items) =>  
  `<div class="container-info-fs">
    <div class="container-img-fs">
      <img src="${items.imgs}" alt="">
    </div>
    <div class="container-text-fs">
      <h4 class="fscard-name">${items.name}</h4>
      <div class="fscard-degree"><i>${items.job}</i></div>
      <hr class="lines">
      <div class="fscard-text">${items.description}</div>
    </div>
  </div>`
  ).join('');


    function speakerCounts () {
    const speakers = Array.from(document.querySelectorAll('.container-info-fs'));
    if (window.innerWidth > 769) {
      for ( let i = 2 ; i < speakers.length ; i += 1) {
        speakers[i].style.display='' ;        
      }
    }
    if (window.innerWidth < 768) {
      for ( let i = 2 ; i < speakers.length ; i += 1) {
        speakers[i].style.display='none' ;        
      }
    }
  }
  

  function showSpeakers(input) {
    const speakers = Array.from(document.querySelectorAll('.container-info-fs'));
    if ( input === 'open') {
      for ( let i = 2 ; i < speakers.length ; i += 1) {
        speakers[i].style.display='' ;             
      }
      document.querySelector('#open-Btn').style.display= 'none'; 
      document.querySelector('#close-Btn').style.display= 'flex'; 
    }
    if ( input === 'close'){
      for ( let i = 2 ; i < speakers.length ; i += 1) {
        speakers[i].style.display='none' ;        
      }
      document.querySelector('#open-Btn').style.display= 'flex'; 
      document.querySelector('#close-Btn').style.display= 'none'; 
    }
  }


// Open de social media
function openWindow (e) {
  if ( e === 'lore-ig') window.open('https://www.instagram.com/teacher_loresf/');
  if ( e === 'erik-fb') window.open('https://www.facebook.com/ProgramacionConStoupignan');
  return null;
}

speakerCounts();
showSpeakers();
openWindow();