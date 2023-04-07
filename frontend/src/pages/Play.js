import React, { useState } from 'react'
import Game from '../components/Game';
import { useDispatch } from 'react-redux';
import { setPrevState, startGame } from '../redux/cardSlice';
import { getUserFromLocalStorage } from '../utils/localStorage';

const Play = () => {

    const [start, setStart] = useState(false);

    const prevState = getUserFromLocalStorage();

    // console.log(prevState);



    const dispatch = useDispatch();

    const handleClick = () => {

        dispatch(startGame())

        setStart(true);

    }

    const handlePrevState = () => {


        console.log(getUserFromLocalStorage());

        dispatch(setPrevState(getUserFromLocalStorage()))

        setStart(true);
    }


    return (
        <div className='flex justify-center items-center h-screen' >
            <div>

                {
                    (prevState.cards.length > 0 && !start) && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6" type='click' onClick={handlePrevState}>Continue</button>
                }



                {
                    !start ? <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type='click' onClick={handleClick}   >Start new Game</button> : <div><Game></Game></div>
                }

            </div>
        </div>
    )
}

export default Play