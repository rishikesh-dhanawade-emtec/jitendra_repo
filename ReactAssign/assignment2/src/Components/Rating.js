import React, { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(0)
    let [str, setStr] = useState('')
    let ratingStr = ' '

    let showRating = () => {
        if (rating <=5 && rating > 0){
            for (let i = 1;i <= rating; i++){
                ratingStr += '*'
            }
            setStr(ratingStr)
        } else {
            alert("Rating must be less than 5 and more 0")
        }
    }

    return (
        <div>
            <div className='container'>
                <h1>Question 4: </h1>
                <h5>Create a component which will show rating using start images. The component should receive a
                    property rating which should control number of stars to be shown</h5>

                <div className='col-ml-6'>
                    <label htmlFor="rating" className='fs-1'>Enter Rating</label>
                    <input type="text" id='rating' onChange={(e) => {
                        setRating(e.target.value)
                    }} className='form-control m-5' />
                </div>
                <button className='btn m-3 btn-warning' onClick={showRating}>Show Rating</button>

                <h1 className='m-5'>Rating is: {str} </h1>
            </div>
        </div>
    )
}

export default Rating;