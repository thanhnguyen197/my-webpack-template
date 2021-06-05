import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

// styles
import './styles.scss';

// containers
import DefaultHeader from 'Modules/Layouts/containers/DefaultHeader';
import DefaultMain from 'Modules/Layouts/containers/DefaultMain';
import DefaultFooter from 'Modules/Layouts/containers/DefaultFooter';

const Layouts:React.FC = () => {

    return (
        <Router>
            <DefaultHeader />
            <DefaultMain />
            <DefaultFooter />
        </Router>
    );
};

export default Layouts;
