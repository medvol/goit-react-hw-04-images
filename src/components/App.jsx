import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "./services/api";

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    
  }

  addImages = async (query) => {  
    try {
         this.setState({
            query,
            isLoading:true
          });
    
        const images = await getImages(query);
        console.log(images)
        this.setState(prevState => (
          {
            images: [...prevState.images, ...images],
            isLoading: false}
        ))
      
    } catch (error) {
      console.log(error)
    }
   
  }



  render() {
    const { images, isLoading } = this.state;
    const { addImages } = this;

    return (
      <>
        <Searchbar onSubmit={addImages} isSubmitting={ isLoading} />
        <ImageGallery items={images} />
        <ToastContainer autoClose={3000} position="top-center"/>

      </>
     

    )   
 
}
}