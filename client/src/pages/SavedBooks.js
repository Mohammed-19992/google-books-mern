import React, { Component } from 'react'
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from '../utils/API';
import ChosenList from "../components/ChosenList/ChosenList";

class SavedBooks extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(respond => {
            console.log("Book deleted:", respond);
            this.getBooks();
        })
        .catch(error => {
            console.log("Erro", error);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(respond => {
            this.setState({
                savedBooks: respond.data
            })
            console.log("respond", respond);
        })
        .catch(error => {
            console.log("Error", error);
        })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <ChosenList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </ChosenList>
                ) : (
                    <h5>Book not found</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default SavedBooks
