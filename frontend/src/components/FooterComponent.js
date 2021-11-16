import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

/**
 * Component responsible to add the footer
 */
class FooterComponent extends Component {

    render() {
        return (
            <Card className="text-center">
                <Card.Footer className="footer"/>
            </Card>
        )
    }
}

export default FooterComponent;