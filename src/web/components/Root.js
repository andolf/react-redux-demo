import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import Frame from './Frame';

const Root = ({store, history}) => (
    <Provider store={store}>
        <Frame>
            <Router history={history} routes={routes}/>
        </Frame>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
