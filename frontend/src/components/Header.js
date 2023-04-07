import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAllScore } from '../redux/cardSlice'

const Header = () => {

    const { userName, defuseCards } = useSelector((store) => store.card)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleClick = () => {

        navigate('/leaderboard');
        dispatch(getAllScore())

    }

    return (
        <div className='w-screen flex justify-around  items-center bg-gray-800 text-white py-4' >

            <p className="text-lg font-semibold">{userName}</p>
            <p className="text-lg font-semibold"> Defuse Card: {defuseCards}</p>
            <button type='click' onClick={handleClick} >leaderboard</button>

        </div>
    )
}

export default Header