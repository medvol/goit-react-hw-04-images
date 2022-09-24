import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { getImages } from 'components/services/api';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from "./Button/Button";
import {Box} from './services/Box'



export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: null,
    isLoading: false,
    disableButton: false
  }

  
    async componentDidUpdate(_, prevState) {        
     
      const { query: prevImageName, page: prevPage } = prevState;
      const { query: nextImageName, page: nextPage } = this.state;
    
      if (prevImageName !== nextImageName || prevPage !== nextPage) {

          try {
              this.setState({ isLoading: true });

              const images = await getImages(nextImageName, nextPage);
            if (images.total === prevState.images.length) {
                this.setState({disableButton: true}) 
                return toast.info(`No more ${nextImageName} to load`, { theme: "colored" })
              }
              if (images.hits.length === 0) return toast.info(`We do not find ${nextImageName}`, { theme: "colored" });
              
              this.setState(prevState => (
                  {
                      images: [...prevState.images, ...images.hits],
                      isLoading: false
                  }
              ));
      
          } catch (error) { this.setState({ error }) }
          finally { this.setState({isLoading: false}) }
      }
    }

  addQuery = async (query) => {     
    this.setState({ query, images: [], page: 1, disableButton: false });  
  }

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
}

  render() {
    const { images, error, isLoading, disableButton } = this.state;
    const { addQuery, incrementPage } = this;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap={4} pb={5}>
        <Searchbar onSubmit={addQuery}  />
        {images.length ? <ImageGallery images={images} /> : null  }      
        {isLoading && <Loader /> }
        { error && <h1>{error.message}</h1> }        
        {images.length ? <LoadMore type='button' text="Load more" onClick={incrementPage} disable={disableButton} /> : null}
        <ToastContainer autoClose={3000} position="top-right" />      
      </Box>    
    )    
}
}