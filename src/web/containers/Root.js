import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Routes from '../routes';
import DevTools from '../../core/components/DevTools';

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
                <div>
                    <Routes />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

export default Root;
