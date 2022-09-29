import {useState} from 'react';
import { Box } from 'components/services/Box';
import { toast } from 'react-toastify';
import { BiSearchAlt2} from "react-icons/bi";
import { SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {   
    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();        
        const { query } = event.currentTarget.elements;        
        if (query.value.trim() === '') {
            toast.error("Type text in form", {theme: "colored"});
            return;
        };
        setIsSubmiting(true); 
        onSubmit(query.value.trim());
        query.value = '';
        setIsSubmiting(false);
    }


     return (
            <Box position="sticky" top={0} left={0} zIndex="search" as="header" display='flex' justifyContent='center' alignItems='center'
            minHeight={6} px={5} py={4} color='white' bg='background' boxShadow='card'>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormButton type="submit" disabled={isSubmiting}>
                        <BiSearchAlt2 size='28px' />
                    </SearchFormButton>

                    <SearchFormInput                   
                        type="text"
                        name="query"                        
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Box>
        )
    
}
