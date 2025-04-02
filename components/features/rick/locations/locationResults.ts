import { Location } from "./locationType";

export type LocationResult = {
    info:{
        pages:number;
        count:number;
        next:string | null;
        prev:string | null;
    }

    results:Location[];
}