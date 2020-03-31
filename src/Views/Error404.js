import React from 'react';
import '../App.css';

import { PageHeader } from '../Components/PageHeader'
import { Graph } from '../Components/Graph'
import { GridTransition } from "../Components/GridTransition"
import { NavLink, Switch, Route } from 'react-router-dom';
import { screenHeight, screenWidth } from '../Scripts/Global'
import { Missing } from './Missing'
import { FadeTransition } from "../Components/FadeTransition"

class Error404 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pushURL: ""
        };
    }


    pushToURL = (url) => {
        this.setState({
            pushURL: url
        });
    }


  render(){
     return (
                <FadeTransition
                    history={this.props.history}
                    pushURL={this.state.pushURL}
                    content={<Missing pushToURL={this.pushToURL}
                    message="Sorry that page does not seem to exist." />} />)
}
}

export {Error404}