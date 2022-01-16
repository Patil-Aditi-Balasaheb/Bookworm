import React, { Component } from 'react'
import axios from 'axios'

export class BookDetail extends Component {

    state = {
        bookDetail: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const url = `https://floran-book-api.herokuapp.com/${id}`

        const fetchBookDetail = () => {
            axios.get(url).then(
                (res) => {
                    this.setState({
                        bookDetail: res.data
                    })
                }
            ).catch(
                err => console.log(err)
            )
        }

        fetchBookDetail()
    }

    render() {
        let bookDetail = this.state.bookDetail

        if(!bookDetail) {
            return <h1 className='text-center'>Loading</h1>
        } else {
            return (
                <div className='container mx-auto my-5'>
                    <div className="row">
                      <div className="col-12 text-center">
                        <div className="card mb-3 w-50 mx-auto">
                            <img src={bookDetail.cover} className="card-img" alt="..."></img>
                            <div className="card-body">
                                <h1 className="card-title">{bookDetail.name}</h1>
                                <p className="card-text">{bookDetail.description}</p>
                                <h5 className="card-text"><small className="text-muted">Author - {bookDetail.author}</small></h5>
                                <h5 className="card-text"><small className="text-muted">Price - Rs. {bookDetail.price}/-</small></h5>
                                <h5 className="card-text"><small className="text-muted">Pages - {bookDetail.pages}</small></h5>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            )
        }
    }
}

export default BookDetail
