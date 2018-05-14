import React from 'react';
import Home from './home';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />

    </Switch>
)

export default Main;