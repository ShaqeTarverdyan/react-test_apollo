import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, } from 'semantic-ui-react'
import CreateLink from './CreateLink';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <CreateLink />
            </div>
        );
    }
}

export default AboutUs;