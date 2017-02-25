import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import Routes from '../routes';

class AppContainer extends React.Component {
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

export default AppContainer;
