import React from 'react'

function BookCard(props) {
    return (
        <div className='col-md-6 col-lg-4 col-12 mb-4 d-flex' onClick={(event) => console.log(event.target.value)}>
          <div className="card">
            <div className="row g-0">
                <div className="col-sm-6">
                    <img src={props.cover} className="card-img-top" alt="..."></img>
                </div>
                <div className="col-sm-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.author}</p>
                        <p className="card-text">Rs. {props.price}/-</p>
                        <a href={'/detail/' + props.bookId} className="btn btnread stretched-link">Read Book</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default BookCard
