import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react'
import { connect } from 'react-redux';

class AddNews extends React.Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addPost(event)
    }
    render() {
        return (
            <Form as={Form} onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        name='name'
                        placeholder='Name'
                        value={this.props.dataPost.name}
                        onChange={this.props.updatePost}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        name='email'
                        placeholder='Email'
                        value={this.props.dataPost.email}
                        onChange={this.props.updatePost}
                    />
                </Form.Field>
                <Button type='submit' primary>Submit</Button>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return {
        dataPposts:state.posts,
        dataPost:state.post
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updatePost:(event) => {dispatch({type:'UPDATE_POST', payload:event})},
        addPost:() => {dispatch({type:'ADD_POST'})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNews);