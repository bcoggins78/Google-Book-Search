import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron"
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper"
import SavedBook from "../../components/SavedBook"

class SavedBooks extends Component {

    state = {
        books: []
    }

    // Runs the RandomDoctors array when component loads
    componentDidMount = () => this.renderSavedBooks();

    renderSavedBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data })
            )
            .catch(err => console.log(err))
    }

    handleDeleteBook = id => {
        API.deleteBook(id)
            .then(res => this.renderSavedBooks())
            .catch(err => console.log(err));
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
                            <Wrapper>
                            <span className="h5 align-text-top">Saved Books</span>
                                {this.state.books.map(book => (<SavedBook
                                    id={book._id}
                                    key={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image ? book.image : "https://dummyimage.com/100x200/fff/000000&text=No+Image"}
                                    link={book.link}
                                    onSelect={() => this.handleDeleteBook(book._id)}
                                />))}
                            </Wrapper>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SavedBooks;