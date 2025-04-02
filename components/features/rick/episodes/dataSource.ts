import { EpisodeResult } from "./episodeResults";
export class DataSource{

    constructor(){}

    async getEpisodes(page:number) : Promise<EpisodeResult>{
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);

        return response.json();
    }
}