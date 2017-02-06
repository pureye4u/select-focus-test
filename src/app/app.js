import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navigation from './Navigation';
import Header from './Header';
import Template from './Template';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

/// Application component
class App extends React.Component {
    /**
     * Render view
     */
    render() {
        // TODO: Change to route value, not location.hash

        return (
            <div className="app">
                <Header />
                <Navigation />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }

    /**/
}

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Template} />
        </Route>
    </Router>,
    document.getElementById('app')
);

// For example, add <Route /> inside of root <Route /> to route component
// <Route path="component" component={Component} />
