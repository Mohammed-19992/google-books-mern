// Requiring module
import axios from "axios";

export default {
    // Retrieving Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Saving book to the DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Getting saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Getting book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deleting book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};