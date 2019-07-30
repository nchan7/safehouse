import React from 'react';
import './App.css';
import {
    Link
} from 'react-router-dom'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        comment: "Dear Sally Bagshaw, I discovered my building has unreinforced masonry and is at risk for damage during an earthquake or other disaster. I'm concerned about the safety of the occupants of this buidling"
        }
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this)
    }


    handleSubmitEmail(e) {
        e.preventDefault();
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleCommentChange(e) {
        this.setState({
            comment: e.target.value
        })
    }

    render () {
        return (
        <div>
            <form className="form">
                <p>Write a letter to your Seattle City Council:</p>
                <input className='email' name='email' placeholder="enter email here..." type="text"/>
                <p>Enter message for local political leader:</p>
                <textarea rows='5' cols='50' name='comment' placeholder={this.state.comment} type="text"/>
                <br/>
                <input type="submit" className='button' value='Send' />
                <p className='directemail'>Or send a message through your own email to Sally Bagshaw, Finance and Neighborhood Chair, by messaging <a>sally.bagshaw@seattle.gov</a></p>
            </form>
            <Link to="/nextsteps" className="link"><button className='button'>What can I do now?</button></Link>
        </div>
        )
    }
}


export default Comment;