import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron"
import API from "../../utils/API";
import GoogleBook from "../../components/GoogleBook";
import Wrapper from "../../components/Wrapper"

class SearchBooks extends Component {

    state = {
        books: [],
        bookSearch: "",
        book: ""
    }

    searchBooks = query => {
        API.googleSearch(query)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.bookSearch);
        this.clearSearch()
    }

    clearSearch = () => this.setState({ bookSearch: "" });

    handleSaveBook(bookData) {
        console.log(bookData)
        const book = {
            gid: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        };

        API.saveBook(book)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                                <h1 className="display-4 text-center">(React) Google Books Search</h1>
                                <h3 className="display-5 text-center">Search for and Save Books of Interest</h3>
                        </Jumbotron>
                        <Jumbotron>
                            <span className="h5 align-text-top">Book Search</span>
                            <br />
                            <br />
                            <p className="h6">Book</p>
                            <form>
                                <Input
                                    value={this.state.bookSearch}
                                    name="bookSearch"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Title"
                                />
                                <FormBtn
                                    disabled={!(this.state.bookSearch)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                        </FormBtn>
                            </form>
                        </Jumbotron>
                        <Jumbotron>
                            <Wrapper>
                                <span className="h5 align-text-top">Results</span>
                                {this.state.books.map(book => (<GoogleBook
                                    gid={book.gid}
                                    id={book.id}
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/100x200/fff/000000&text=No+Image"}
                                    link={book.volumeInfo.infoLink}
                                    onSelect={() => this.handleSaveBook(book)}
                                />))}
                            </Wrapper>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchBooks;