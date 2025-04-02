import { Episode } from "./episodeType";

export type EpisodeResult = {
    info:{
        pages:number;
        count:number;
        next:string | null;
        prev:string | null;
    }

    results:Episode[];
}