// Libraries
import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

// routes
import routes from 'src/routes';

const DefaultMain:React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map(route => {
                    const {path, exact, component} = route;

                    return (
                        <Route path={path} exact={exact} key={path} component={component} />
                    );
                })}
            </Switch>
        </Suspense>
    );
};

export default DefaultMain;
