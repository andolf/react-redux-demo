import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Routes from '../routes';

class Root extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

export default Root;
