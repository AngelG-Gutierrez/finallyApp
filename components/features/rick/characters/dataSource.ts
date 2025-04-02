//crear clase DataSource

import { CharacterResult } from "./characterResults";

export class DataSource{

    //metodo para cargar personajes

    constructor(){}

    async getCharacters(page:number) : Promise<CharacterResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

        return response.json();
    }
}