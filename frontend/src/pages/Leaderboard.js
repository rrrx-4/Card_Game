import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Record from '../components/Record';

import { NavLink } from 'react-router-dom';


const Leaderboard = () => {

    const { records } = useSelector((store) => store.card)
    const dispatch = useDispatch();

    // console.log(records);



    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div>
                <p className="text-4xl font-bold text-center text-purple-700">Leaderboard</p>
            </div>
            <div>
                {
                    records?.length > 0 && (

                        records.map((record, idx) => {

                            return (
                                <Record key={idx} record={record} ></Record>
                            )

                        })

                    )
                }
            </div>

            <div className="bg-gray-100 p-4">
                <NavLink className="text-gray-800 hover:text-gray-600 font-medium px-2 py-1 rounded-md"
                    activeClassName="bg-gray-300" to="/game" >Back to Game</NavLink>
            </div>

        </div>
    )
}

export default Leaderboard