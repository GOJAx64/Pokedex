const MAX_ID = 905; //905
const MIN_ID = 1;

export const getRandomIds = () => {
    let ids = [];
    for(let i = 0; i < 8; i++) {
        ids.push(Math.floor((Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID));
    }
    return ids;
}