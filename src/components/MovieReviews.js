// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => (<div className="review-list" >
    {props.reviews.map(review => <p className="review">{review.headline}</p> )}
</div>)

export default MovieReviews

