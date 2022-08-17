export const getColorOfType = ( type:string ) => {
    let color = '';

    switch(type) {
        case 'bug':      color = 'lime-600';    break;
        case 'dark':     color = 'neutral-800'; break;
        case 'dragon':   color = 'purple-500';  break;
        case 'electric': color = 'orange-600';  break;
        case 'fairy':    color = 'pink-200';    break;
        case 'fighting': color = 'amber-500';   break;
        case 'fire':     color = 'red-500';     break;
        case 'flying':   color = 'blue-400';    break;
        case 'ghost':    color = 'violet-700';  break;
        case 'grass':    color = 'green-600';   break;
        case 'ground':   color = 'amber-300';   break;
        case 'ice':      color = 'emerald-100'; break;
        case 'normal':   color = 'gray-200';    break;
        case 'poison':   color = 'purple-800';  break;
        case 'psychic':  color = 'pink-500';    break;
        case 'rock':     color = 'yellow-600';  break;
        case 'steel':    color = 'zinc-500';    break;
        case 'water':    color = 'sky-500';     break;
        default:         color = 'gray-200';    break;
    }
    console.log(color);
    return color;
}