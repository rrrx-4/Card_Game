import React from 'react'
import { useDispatch } from 'react-redux';
import { catCard, defuseCard, explodeCard, suffleCard } from '../redux/cardSlice';
import { randomIntFromInterval } from '../utils/createRandomCards';


const Card = ({ card }) => {

    const dispatch = useDispatch();


    const handleClick = (e) => {

        const v = JSON.parse(e.target.dataset.card);



        const rn = randomIntFromInterval(1, 4);

        // console.log("rn", rn);


        if (rn === 1) {
            dispatch(catCard(v.idx));
        }
        else if (rn === 2) {
            dispatch(defuseCard(v.idx))
        }
        else if (rn === 3) {
            dispatch(explodeCard(v.idx));
        }
        else if (rn === 4) {
            dispatch(suffleCard(v.idx))
        }


    }

    return (
        <div>

            <button className="bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg rounded-md p-4 w-64 h-64" type='click' data-card={JSON.stringify(card)} onClick={handleClick}  ></button>

        </div>
    )
}

export default Card