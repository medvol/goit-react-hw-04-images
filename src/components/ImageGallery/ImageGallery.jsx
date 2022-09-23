import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { getImages } from 'components/services/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Gallery } from './ImageGallery.styled';


export class ImageGallery extends Component {
    state = {
        images:[],
        status: 'idle',        
        error: null
    }

    async componentDidUpdate(prevProps, prevState) {
     
        const { query: prevImageName, page: prevPage } = prevProps.status;
        const { query: nextImageName, page: nextPage } = this.props.status;
        
        if (prevImageName !== nextImageName) {
            this.setState({images: []})
        }
        if (prevImageName !== nextImageName || prevPage !== nextPage) {

            try {            
                this.setState({ status: 'pending' });

                const images = await getImages(nextImageName, nextPage);
                if (images.total === prevState.images.length) {
                    this.setState({ status: 'resolved' })
                    return toast.info(`No more ${nextImageName} to load`, { theme: "colored" })
                }
                if (images.hits.length === 0) return toast.info(`We do not find ${nextImageName}`, { theme: "colored" });
                
                this.setState(prevState => (
                    {
                    images: [...prevState.images, ...images.hits],
                    status: 'resolved'
                }
                ));
        
            } catch (error) { this.setState({ error, status: 'rejected' }) }
            finally {}
        }
    }      
            

    render() {
        const { images, error, status } = this.state;            
            
        if (status === 'pending') { return <Loader /> };

        if (status === 'resolved') {
            return (<Gallery >
                        {images.map(image => (
                            < ImageGalleryItem key={image.id} item={image} />
                        ))}
                    </Gallery>
            )
        };

        if (status === 'rejected') { return <h1>{error.message}</h1> };

    }
}


// ImageGallery.propTypes = {
//      items: PropTypes.arrayOf (PropTypes.shape ({
//         id: PropTypes.number.isRequired,
//         tags: PropTypes.string.isRequired,
//         webformatURL: PropTypes.string.isRequired,
                      
//         }))
// }

