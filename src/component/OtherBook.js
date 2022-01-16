import React, { useState } from 'react'
import BookCard from './BookCard'
import axios from 'axios'

function OtherBook() {

    const [otherBook, setOtherBook] = useState("")

    const BASE_URL = "https://floran-book-api.herokuapp.com/"

    React.useEffect(() => {
        axios.get(BASE_URL).then(
            (res) => {
                setOtherBook(res.data.reverse())
            }
        ).catch(
            err => console.log(err)
        )
    }, [])

    if(otherBook) {
        return (
            <>
                <h1 className='text-center'>
                    Other Books
                </h1>
                <div className='row'>
                    {
                        otherBook.map((value, index) => (
                            <BookCard bookId={value.id} name={value.name} author={value.author} description={value.description} price={value.price} pages={value.pages} cover={value.cover} />
                        ))
                    }
                </div>
            </>
        )
    } else {
        return <h1 className='text-center'>Loading</h1>
    }
}

export default OtherBook
