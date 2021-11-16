import React from "react";

import {Col, Figure, Form, Table, Button} from "react-bootstrap";
import GoogleApiService from "../services/GoogleApiService";
import ResizeImageService from "../services/ResizeImageService";

/**
 * Component responsible to render all elements at Search Image part
 */
class SearchImagesComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            searchField: ""
        }
    }

    changeSearchField = (event) => {
        this.setState({searchField: event.target.value});
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    /**
     * Responsible for search result in the Google API Service
     * @param e
     */
    searchPhotos = (e) => {
        e.preventDefault();
        const googleSearch = this.state.searchField !== '' ? this.state.searchField : ' ';

        GoogleApiService.getImages(googleSearch)
            .then(res => res.json())
            .then((data) => {
                const images = data.items.map(_ => (
                    {
                        link: _.link,
                        title: _.title
                    }
                ));

                this.setState({images: images});
            })
            .catch(console.log)
    };

    /**
     * Send images to be resized
     * @param link
     */
    sendImage = (link) => {
        ResizeImageService.sendImage(link)
            .then(response => response.json())
            .finally(() => {

                const images = this.state.images.filter(_ => _.link !== link)
                this.setState({images: images});

            })
            .catch(console.error);
    };

    render() {
        return (
            <>
                <br/>
                <div>
                    <h3>
                        Search Image
                    </h3>
                </div>
                <Form noValidate validated={false} onSubmit={this.handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Search Images
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Search Images"
                                defaultValue={this.state.searchField}
                                onChange={this.changeSearchField}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2" onClick={this.searchPhotos}>
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th key="">Results</th>
                        <th key="">Action</th>
                    </tr>
                    </thead>
                    <tbody onChange={this.state}>
                    {this.state.images.map((_, index) => (
                        <tr>
                            <td>
                                {index}
                            </td>
                            <td>
                                <a href={_.link} target="_blank">
                                    <Figure class="text-center">
                                        <Figure.Image
                                            width={200}
                                            height={200}
                                            alt="200x200"
                                            src={_.link}
                                        />
                                    </Figure>
                                </a>
                            </td>
                            <td>
                                <Button type="submit" className="mb-2" onClick={() => this.sendImage(_.link)}>
                                    Resize
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default SearchImagesComponent;