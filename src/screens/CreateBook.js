import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBook = () => {

    const history = new useHistory()

    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [cover, setCover] = useState(null)

    const url = "https://floran-book-api.herokuapp.com/"

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    let publishBook = async () => {
        let formData = new FormData()

        if(name !== "" && author !== "" && price !== "" && pages !== "" && cover !== null && description !== "") {
            formData.append("name", name)
            formData.append("author", author)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("pages", pages)
            formData.append("cover", cover)
            
            await axios.post(url, formData, config).then(
                (res) => {
                    console.log(res)
                    
                    setName("")
                    setAuthor("")
                    setPages("")
                    setPrice("")
                    setCover(null)
                    setDescription("")

                    history.push("/")
                }
            ).catch(
                err => console.log(err)
            )
        } else {
            alert("Fill data properly")
        }
    }
    return (
        <div className="container mx-auto mt-5 mb-5">
            <div className='create-form'>
                <div className="row">
                    <div className="float-end">
                        <button className='btn btn-lg btn-outline-dark' onClick={publishBook}>Publish</button>
                    </div>
                    <div className="col-12 mt-4">
                        <h4>Image</h4>
                    </div>
                    <div className="col-12">
                        <input type="file" accept='image/*' className='form-control shadow-none' onChange={(e) => setCover(e.target.files[0])}/>
                    </div>
                    <div className="col-12 mt-4">
                        <h4>Book Title</h4>
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder='Write Title here' className='form-control shadow-none' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col-12 mt-4">
                        <h4>Author</h4>
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder='Write Author name here' className='form-control shadow-none' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className="col-12 mt-4">
                            <h4>Pages</h4>
                        </div>
                        <div className="col-12">
                            <input type="number" placeholder='Write no. of pages here' className='form-control shadow-none' value={pages} onChange={(e) => setPages(e.target.value)}/>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className="col-12 mt-4">
                            <h4>Price</h4>
                        </div>
                        <div className="col-12">
                            <input type="number" placeholder='Write Price of book here' className='form-control shadow-none' value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <h4>Description</h4>
                    </div>
                    <div className="col-12 mb-2">
                        <textarea id="book" placeholder='Write Content here' className='form-control shadow-none' rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook
