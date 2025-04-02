/*Definir el tipo de dato que
devuelve el endpoint character
*/

import { Character } from "./characterType";

export type CharacterResult = {
    info:{
        pages:number;
        count:number;
        next: string | null;
        prev: string | null;
    },

    results: Character[];
}