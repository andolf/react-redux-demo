import React, {PureComponent} from 'react';

class NotFound extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>No page was found</p>
        );
    }
}

export default NotFound;
