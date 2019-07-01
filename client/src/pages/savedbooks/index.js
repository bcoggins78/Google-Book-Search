import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron"
import API from "../../utils/API";
import { Link } from "react-router-dom";

class SavedBooks extends Component {

    state = {

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
                            <span className="h5 align-text-top">Saved Books</span>
                        </Jumbotron>


                    </Col>
                </Row>

            </Container>
        )
    }
}

export default SavedBooks;