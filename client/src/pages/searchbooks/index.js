import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron"
import { List, ListItem } from "../../components/List"
import API from "../../utils/API";


class SearchBooks extends Component {

    state = {
        books: [],
        bookSearch: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
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
                            <span className="h5 align-text-top">Book Search</span>
                            <br />
                            <br />
                            <p className="h6">Book</p>
                            <form>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title"
                                />
                                <FormBtn
                                    disabled={!(this.state.title)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                        </FormBtn>
                            </form>
                        </Jumbotron>
                        <Jumbotron>
                            <span className="h5 align-text-top">Results</span>
                            <List>
                                
                            </List>
                        </Jumbotron>


                    </Col>
                </Row>

            </Container>
        )
    }
}

export default SearchBooks;