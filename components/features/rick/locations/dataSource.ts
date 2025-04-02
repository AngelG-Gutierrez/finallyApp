import { LocationResult } from "./locationResults";
export class DataSource{

    constructor(){}

    async getLocation(page:number) : Promise<LocationResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);

        return response.json();
    }
}