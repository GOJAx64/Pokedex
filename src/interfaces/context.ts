export interface ContextProps { 
    
}

export interface propsAppProvider {
    children: JSX.Element | JSX.Element[]
}

interface stat {
    base_stat : number;
    name      : string;
}

interface evolution {
    min_level : number;
    name      : string;
}

export interface pokemonDetail{
    abilities   : string[]; 
    description : string;
    evolutions? : evolution[] ;
    height      : number;
    id          : number;
    name        : string;
    stats       : stat[]; 
    types       : string[];
    weight      : number;
}