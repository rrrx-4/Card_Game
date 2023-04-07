import React from 'react'

const Record = ({ record }) => {

    const { username, score } = record;

    return (
        <div className='flex justify-center items-center gap-2' >

            <p className="text-lg font-bold text-gray-800">{username}-</p>
            <p className="text-xl font-bold text-orange-700 ">{score}</p>

        </div>
    )
}

export default Record