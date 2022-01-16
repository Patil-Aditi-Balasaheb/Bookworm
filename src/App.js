import React from 'react';
import './css/App.css';
import Navbar from './component/Navbar';
import BookList from './screens/BookList';
import CreateBook from './screens/CreateBook';
import BookDetail from './screens/BookDetail';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container mt-3'>
        <Route path="/" exact component={BookList} />
        <Route path="/create" exact component={CreateBook} />
        <Route path="/detail/:id" exact component={BookDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
