import {useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { getImages } from 'components/services/api';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from "./Button/Button";
import {Box} from './services/Box'

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const addQuery = async (query) => {   
    setImages([]);
    setQuery(query);
    setPage(1);
    setDisableButton(false);  
  }

  const incrementPage = () => {
    setPage(prev => prev + 1);  
  }

  useEffect(() => {
    if (!query) return; 
    
    const fetchData = async () => {      
      
      try {
           setIsLoading(true);
        
            const fetchImages = await getImages(query, page);

            if (fetchImages.hits.length === 0) return toast.info(`No more ${query} images to load`, { theme: "colored" });

            setImages(prev => [...prev, ...fetchImages.hits]);
            setIsLoading(false);            
             
          } catch (error) { setError(error) }
          finally { setIsLoading(false)}    
      
    }
    fetchData();
      
  }, [query, page])
 

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
