import { Characters } from "./characters";

const characterContainer = document.querySelector('.characters')
const loadingElement = document.querySelector('.loading-spinner');

const allCharacters = new Characters();


const createCards = (data) => {
    
    data.forEach(character => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="col-lg mt-4">
            <div class="card all-char-card text-light" style="width: 18rem;">
                <img src="${character.img}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <p class="card-text lead"> ${character.name}</p>
                    <p class="card-text"><span class="lead text-black-50">Nickname:</span> ${character.nickname}</p>
                    <p class="card-text"><span class="lead text-black-50">Occupation:</span> ${character.occupation}</p>
                    <p class="card-text"><span class="lead text-black-50">Birthday:</span> ${character.birthday}</p>
                    <p class="card-text"><span class="lead text-black-50">Status:</span> ${character.status}</p>
                    <p class="card-text"><span class="lead text-black-50">Portrayed:</span> ${character.portrayed}</p>
                </div>
            </div>
        </div>    
        `;
        characterContainer.appendChild(card);
        loadingElement.style.display = 'none';
    })
}

allCharacters.getAllCharacters()
    .then(data => createCards(data))
    .catch(err => console.log(err));