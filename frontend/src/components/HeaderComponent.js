import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

/**
 * Component responsible to add the menu
 */
class HeaderComponent extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Image Resizer</Navbar.Brand>
            </Navbar>
        )
    }
}

export default HeaderComponent;