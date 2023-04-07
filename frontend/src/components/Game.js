import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card';
import Won from './Won';
import Lost from './Lost';
import { addUserToLocalStorage } from '../utils/localStorage';
import { addScore, emptyState, incWon } from '../redux/cardSlice';
import Header from './Header';

const Game = () => {

    const dispatch = useDispatch();

    const { cards, gameState, currentCard, userName, score, id } = useSelector((store) => {
        return store.card
    });

    const store = useSelector((store) => store.card)

    console.log(store);

    addUserToLocalStorage(store);

    if (cards.length === 0) {

        // dispatch(incWon());
        dispatch(emptyState('WON'));
        dispatch(addScore({ username: userName, score, id }))
        return (
            <Won></Won>
        )
    }

    console.log(gameState);
    if (gameState === 'LOST') {



        dispatch(emptyState('LOST'));

        return (
            <Lost></Lost>
        )
    }


    return (
        <div className="flex flex-col justify-between items-center h-screen "   >

            <div>
                <Header></Header>
            </div>

            <div className='flex flex-wrap justify-center gap-4' >

                {
                    cards.map((card, i) => {

                        return (
                            <Card key={i} card={card}></Card>
                        )

                    })
                }

            </div>

            {currentCard && <div className='mt-12  w-full bg-gray-800 text-white py-2 px-4 flex  justify-center'>
                <p className="text-lg font-semibold">{currentCard}</p>
            </div>}
            <div></div>

        </div>
    )
}

export default Game