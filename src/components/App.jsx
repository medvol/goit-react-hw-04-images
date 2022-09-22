import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMore } from "./Button/Button";



export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,    
    
  }

  addQuery = async (query) => {     
    this.setState({ query, images: [], page: 1 });  
  }

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
}

  render() {
    const { query, isLoading } = this.state;
    const { addQuery, incrementPage } = this;

    return (
      <>
        <Searchbar onSubmit={addQuery}  />
        <ImageGallery status = {this.state} />
        <ToastContainer autoClose={3000} position="top-center" />
        {query && <LoadMore type='button' text="Load more" onClick={ incrementPage} />}
       

      </>
     

    )   
 
}
}