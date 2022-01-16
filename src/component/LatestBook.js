import React, { useState } from 'react'
import BookCard from './BookCard'
import axios from 'axios'

function LatestBook() {

    const [latestBook, setLatestBook] = useState("")

    const BASE_URL = "https://floran-book-api.herokuapp.com/latest/"

    React.useEffect(() => {
        axios.get(BASE_URL).then(
            (res) => {
                setLatestBook(res.data.reverse())
            }
        ).catch(
            err => console.log(err)
        )
    }, [])

    if(latestBook) {
        return (
            <>
                <h1 className='text-center'>
                    Latest Books
                </h1>
                <div className='row'>
                    {
                        latestBook.map((value, index) => (
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

export default LatestBook
