import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
    state = { activeItem: 'home' }
    render() {
        return (
            <Menu
                pointing
                borderless
                fixed='top'
                floated='right'
                inverted
                size='huge'
                stackable
                tabular='right'
                widths='6'
            >
                <Menu.Item
                    as={Link}
                    to='/'
                    name='Home'
                    link
                />
                <Menu.Item
                    as={Link}
                    to='/news'
                    name='News'
                    link
                />
                <Menu.Item
                    as={Link}
                    to='/addNews'
                    name='Addnews'
                    link
                />
                <Menu.Item
                    as={Link}
                    to='/contact'
                    name='Contact'
                    link
                />
                <Menu.Item
                    as={Link}
                    to='/aboutUs'
                    name='About us'
                    link
                />
            </Menu>
        );
    }
}

export default Header;