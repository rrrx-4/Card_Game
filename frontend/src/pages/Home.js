import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { setUsername, handleDraw, test, registerUser } from '../redux/cardSlice';
import { useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage } from '../utils/localStorage';


const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { defuseCards, id } = useSelector(store => {
        return store.card;
    })

    // console.log(defuseCards);

    const [userName, setUserName] = useState("");


    const is = getUserFromLocalStorage();

    useEffect(() => {
        if (is !== null && is.userName !== null) {

            console.log(is.userName);
            navigate('./game', { replace: true })
        }



    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName) {
            alert("input cannot be Empty")
            return;
        }

        console.log("id", id);
        dispatch(registerUser({ username: userName, score: 0 }))
        dispatch(setUsername({ userName, id }));
        // console.log('gddg');
        navigate("/game");
        setUserName("");

    }



    return (

        <div className='flex justify-center items-center h-screen' >
            <div>
                <form onSubmit={handleSubmit} >
                    <label className="text-gray-700 font-bold mb-2 mr-6" id='username' >userName</label>
                    <input className="border border-gray-500 py-2 px-4 rounded-md mb-4 mr-6" type="text" htmlFor="username" name='username' value={userName} onChange={(e) => setUserName(e.target.value)} ></input>
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enter the Game</button>
                </form>
            </div>
        </div>
    )
}

export default Home