import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Menu, Segment, Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NewsContent extends React.Component {
    redirect = () => {
        return <Redirect to='/news' />
    }
    getNews = () => {
        const { params } = this.props.match;
        const news = this.props.dataPosts.filter(data => data.id == params.id)[0];
        console.log('item',news);
        return news;
    }
    render() {
        const news = this.getNews();
        return (
            news ?
                <Segment>
                    <Item>
                        Name - {news.name}
                    </Item>
                    <Item>
                        Email - {news.email}
                    </Item>
                    <Button
                        primary
                        onClick={() => this.props.deleteItem(news.id)}
                    >
                        delete
                </Button>
                </Segment> : this.redirect()
        );
    }
}
const mapStateToProps = state => {
    return {
        dataPosts: state.posts
    }
}

const mapdispatchToProps = dispatch => {
    return {
        deleteItem: (id) => {dispatch({ type: 'DELETE_ITEM', deletedItemId: id })}
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(NewsContent);