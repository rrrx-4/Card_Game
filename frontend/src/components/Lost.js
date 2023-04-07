import React from 'react'
import Play from '../pages/Play'
import { useNavigate } from 'react-router'

const Lost = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate('/game')

    }


    return (
        <div className='flex-row justify-center items-center h-screen'>

            <div className="bg-red-500 text-white p-4 rounded-md">
                <h2 className="text-xl font-bold">Oh no! You lost the game.</h2>

            </div>
            <div>
                <Play></Play>
            </div>
        </div>
    )
}

export default Lost