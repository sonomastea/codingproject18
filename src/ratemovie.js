import react, {useState} from 'react'
const RateMovieButton={(moviename)}
 const [rating,setrating]=useState(0);
 let ratings=[1,2,3,4,5]
 const submitRating=() => {
    setMessage('Thank you for the rating!');

    return(
        <div>
            <Star Rating Scale 
            name="rating"
            stars={1,2,3,4,5}
            onStarClick = { () =>movieRating{stars}} />

            <button onCLick={submitRating}>Submit Rating</button>
        </div>

    )

 }
