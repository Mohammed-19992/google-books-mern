import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Input, Submit} from "../components/Search/Search";
import API from "../utils/API";
import Results from "../components/Results/Results";
import "./style.css";


class Main extends Component {

    state = {
        books: [],
        search: ""
    };


    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(respond => {
                console.log("This is res.data", respond.data.items)
                this.setState({
                books: respond.data.items,
                search: ""
            })})
            .catch(error => console.log(error));
            
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(respond => console.log("Successful POST to DB!", respond))
        .catch(error => console.log("this is the error", error));
    }

    render() {
        return (
            <div id="div">
                <Nav />
                <Container fluid>
                <Jumbotron />
                <form>
                    <h5 id="h5">Search for your favorite books</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Still Living There"
                    />
                    <Submit onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <Results
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </Results>
                ) : (
                    <div>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Main
