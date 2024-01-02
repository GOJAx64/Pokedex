export interface ContextProps { 
    
}

export interface propsAppProvider {
    children: JSX.Element | JSX.Element[]
}

interface Stat {
    base_stat : number;
    name      : string;
}

export interface Evolution {
    min_level   : number;
    name        : string;
    pokemonInfo? : any;
    image?       : string;
}

export interface pokemonDetail{
    abilities   : string[]; 
    description : string;
    evolutions? : Evolution[] ;
    height      : number;
    id          : number;
    name        : string;
    stats       : Stat[]; 
    types       : string[];
    weight      : number;
}