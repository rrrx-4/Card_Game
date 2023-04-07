
export const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




export const createRandomCards = () => {

    var cards = [];




    for (let i = 0; i < 5; i++) {
        var rn = randomIntFromInterval(1, 4)
        let card = {
            idx: i,
            //  rn: rn,
        }

        cards.push(card);

    }

    return cards;

}