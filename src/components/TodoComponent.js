import React from 'react';
import { connect } from 'react-redux';
import './TodoComponent.css'


class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
  }
  submit = (event) => {
    this.props.todo(this.state.todo);
    this.setState({todo: ''})
    event.preventDefault();
  }
  handleChange = (event) => {
    this.setState({todo: event.target.value});
  }
  render() {
  return (
    <form className="divClass" onSubmit={this.submit}>
    <input type = "text" value={this.state.todo} onChange={this.handleChange} className="inputClass"/>
    <input type="submit" value = "submit"  className="button"/>
    </form>
  );
  }
}

const mapDispatchToProps = (dispatch) => ({
  todo: (data) => { dispatch({ data: data ,type: 'Todo' }) }
})


export default connect(null, mapDispatchToProps)(TodoComponent)
