import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Container,Grid,Button} from 'semantic-ui-react'
import { connect } from 'react-redux';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers()
    }
    render() {
        return (
            <Segment>
                <Grid columns={3} divided>
                    {
                        this.props.posts.map(post => 
                            
                                <Grid.Column key={post.id}>
                                    <Segment >
                                        {post.name}
                                        <Button 
                                            as={Link}
                                            to={'/news/' + post.id}
                                            floated='right' 
                                            positive  
                                            size='small'
                                            primary
                                            toggle
                                            attached='top'
                                        >see more</Button>
                                    </Segment>
                                    
                                </Grid.Column>
                        
                        )
                    }
                </Grid>
            </Segment>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts:state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsers:() => dispatch({type:'GET_USERS'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News);