import React from "react";

import {Figure, Table, Button} from "react-bootstrap";
import ResizeImageService from "../services/ResizeImageService";

/**
 * Component responsible to render all elements at Image Resized part
 */
class ImagesResizedComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    /**
     * Get Image resized
     */
    searchImageResized = () => {
        ResizeImageService.getImages()
            .then(res => res.json())
            .then((data) => {
                this.setState({images: data.images});
            })
            .catch(console.log)
    };

    /**
     * Delete Image resized
     */
    deleteImage = (e) => {
        ResizeImageService.delete(e)
            .then(response => response.json())
            .finally(() => {
                const images = this.state.images.filter(_ => _.key !== e)
                this.setState({images: images});
            })
            .catch(console.error);
    };

    render() {
        return <>
            <br/>

            <div>
                <h3>
                    Images Resized
                </h3>
            </div>
            <div style={{width: "100%", textAlign: "center"}}>
                <Button type="submit" className="mb-2" onClick={this.searchImageResized}>
                    Search
                </Button>

                <Table responsive>
                    <thead>
                    <tr>
                        <th key="">Results</th>
                        <th key="">Action</th>
                    </tr>
                    </thead>
                    <tbody onChange={this.state}>
                    {this.state.images.map((_, index) => (
                        <tr>
                            <td>
                                <a href={_.url} target="_blank">
                                    <Figure class="text-center">
                                        <Figure.Image
                                            width={200}
                                            height={200}
                                            alt="200x200"
                                            src={_.url}
                                        />
                                    </Figure>
                                </a>
                            </td>
                            <td>
                                <Button type="submit" className="mb-2" variant="danger"
                                        onClick={() => this.deleteImage(_.key)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>
        </>
    }
}

export default ImagesResizedComponent;