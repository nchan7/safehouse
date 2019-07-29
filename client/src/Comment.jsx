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
        comment: "Dear Local representative, please change some laws so I don't get crushed by one of these buildings...k thx. bye..."
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
            <form>
                <p>Enter email:</p>
                <input name='email' placeholder="enter email here..." type="text"/>
                <p>Enter message for local politician</p>
                <input name='comment' placeholder={this.state.comment} type="text"/>
                <p>Or send a message through your own email to John Cena, Commercial and Residential City Building Coordinator by going to <a>JohnCena@SeattleGov.com</a></p>
                <input type="submit" value={this.state.email} />
            </form>
            <Link to="/nextsteps" className="link"><button className='button'>What can I do now?</button></Link>
        </div>
        )
    }
}


export default Comment;