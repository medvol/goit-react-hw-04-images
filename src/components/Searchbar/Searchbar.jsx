import React, { Component } from 'react';
import { toast } from 'react-toastify';


export class Searchbar extends Component{
    state = {
        query:'',
    
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        const { query } = event.currentTarget.elements; 
        if (query.value.trim() === '') {
            toast.error("Type text in form", {theme: "colored"});
            return;
        };
        this.props.onSubmit(query.value);
        query.value = '';
    }

    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" disabled={this.props.isSubmitting}>
                    <span>Search</span>
                    </button>

                    <input                   
                        type="text"
                        name="query"
                        
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}