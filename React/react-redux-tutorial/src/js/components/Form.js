import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'


// Connects action creator to component's props so its accessible there
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

// You could also write it like this, be sure to pass it to the connect function
// const actionCreators = {
//     addArticle
// }

class ConnectedForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    }

    render() {
        const { title } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">SAVE</button>
          </form>
        );
    }
}
// Note: the first argument for connect must be null when mapStateToProps is absent 
// like in our example. Or you'll get TypeError: dispatch is not a function.
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form