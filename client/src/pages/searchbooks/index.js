import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron"
// import { List, ListItem } from "../../components/List"
import API from "../../utils/API";
import GoogleBook from "../../components/GoogleBook";
import Wrapper from "../../components/Wrapper"
// import { DocumentProvider } from "mongoose";


class SearchBooks extends Component {

    state = {
        books: [],
        bookSearch: ""
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
    }

    handleSubmitSave = event => {
        event.preventDefault();
        API.saveBook({
            
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
                            <span className="h5 align-text-top">Results</span>
                            <Wrapper>
                                {this.state.books.map(book => (<GoogleBook
                                    id={book.id}
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://dummyimage.com/100x200/fff/000000&text=No+Image"}
                                    link={book.volumeInfo.infoLink}
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