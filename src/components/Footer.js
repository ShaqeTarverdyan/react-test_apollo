import React from 'react';
import { Menu, Segment, MenuItem, Container, Header, Item, ItemContent, ItemMeta, ItemDescription, ItemExtra } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = () => {
    return (

        <Container
            textAlign='center'
        >
            <Item>
                <ItemContent verticalAlign='bottom'>
                    <ItemMeta>Footer</ItemMeta>
                </ItemContent>
            </Item>


        </Container>
    )
}

export default Footer;