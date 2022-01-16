import React from 'react'
import LatestBook from '../component/LatestBook'
import OtherBook from '../component/OtherBook'

function BookList() {
    return (
        <>
            <div className='row mt-5'>
                <LatestBook/>
            </div>
            <div className='row mt-5'>
                <OtherBook/>
            </div>
        </>
    )
}

export default BookList
