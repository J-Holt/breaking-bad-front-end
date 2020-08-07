"use strict";

class Characters {
    constructor() {
        this.characterURI = 'https://breakingbadapi.com/api/characters';
    }

    async getCharacter(name) {

        const query = await `?name=${name}`;
        const response = await fetch(this.characterURI + query)
        const data = await response.json();
        
        // console.log(data);
        return data;
    }
    async getAllCharacters(){
        const response = await fetch(this.characterURI);
        const data = await response.json();

        return data;
    }
}

export { Characters };