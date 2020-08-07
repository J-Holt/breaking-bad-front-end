import { Characters } from "./characters";

const form = document.querySelector('form');
const characterInput = document.getElementById('characterSearchInput');
const card = document.querySelector('.card');
const imgDetails = document.querySelector('.imgDetails');
const details = document.querySelector('.details');
const errorElement = document.querySelector('.error');
const loadingSpinner = document.querySelector('.loading');

const character = new Characters();

loadingSpinner.style.display = 'none';
errorElement.style.display= 'none';

const updateUI = (data) => {
    console.log(data[0]);

    const { name, nickname, status, birthday, img, portrayed, category, occupation} = data[0];

    imgDetails.innerHTML = `
        <img src="${img}" class="img-fluid" alt="picture of ${name}">
    `;

    details.innerHTML = `
        <h5 class="card-title display-4 text-light">${name}</h5>
        <p class="card-text"><span class="lead text-black-50">Nickname:</span> ${nickname}</p>
        <p class="card-text"><span class="lead text-black-50">Birthday:</span> ${birthday}</p>
        <p class="card-text"><span class="lead text-black-50">Occupation:</span> ${occupation}</p>
        <p class="card-text"><span class="lead text-black-50">Status:</span> ${status}</p>
        <p class="card-text"><span class="lead text-black-50">Series:</span> ${category}</p>
        <p class="card-text"><span class="lead text-black-50">Portrayed:</span> ${portrayed}</p>
    `

    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    errorElement.style.display = 'none';
};

const errorHandler = () => {
    errorElement.style.display = '';
    loadingSpinner.style.display = 'none';
    form.style.display = '';
    if(!card.classList.contains('d-none')){
        card.classList.add('d-none');       
    }
};


// search input field validation 
characterInput.addEventListener('input', e => {

    if (characterInput.validity.patternMismatch) {
        characterInput.setCustomValidity("Please enter a valid character name. e.g. Walter White");
      } else {
        characterInput.setCustomValidity("");
      }
})


form.addEventListener('submit', e => {
    e.preventDefault();

    if(!characterInput.validity.valid) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
    
    const name = form.name.value.trim();
    form.reset();
    form.style.display = 'none';
    loadingSpinner.style.display = '';

    character.getCharacter(name)
      .then(data => {
        updateUI(data);
        form.style.display = '';
        loadingSpinner.style.display = 'none';

      })
      .catch(err => {
        console.log(err);
        errorHandler();
      })
})