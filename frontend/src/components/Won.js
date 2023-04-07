import React from 'react'
import Play from '../pages/Play'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'

const Won = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate('/game')

    }

    return (
        <div className='flex-row justify-center items-center h-screen'>

            <div className="bg-green-500 text-white p-4 rounded-md">
                <h2 className="text-xl font-bold">Congratulations! You won the game.</h2>
            </div>
            <div>
                <Play></Play>
            </div>
        </div>
    )
}

export default Won