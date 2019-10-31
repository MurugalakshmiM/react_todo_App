import React from 'react';
import { connect } from 'react-redux';
import MaterialIcon from 'material-icons-react';
import './TodoList.css'


class TodoList extends React.Component {
  
onDelete(data){
  this.props.delete(data);;
}

onComplete(data){
  this.props.complete(data);
}

  render() {
  return (
    <div className="todoList">
      {
        this.props.todoList.todo.length > 0 ? <h3>Todo List</h3> : <p></p>
      }
    {this.props.todoList.todo.map((data, index) => 
        <li key={data.id}>{data.actions}<span className="icon clear"><MaterialIcon icon="clear" onClick={()=> this.onDelete(data)} >delete</MaterialIcon></span><span className="icon"><MaterialIcon icon="check" onClick={()=>this.onComplete(data)}>complete</MaterialIcon></span></li>
    )}  
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => ({
  complete: (data) => { dispatch({ data: data ,type: 'Completed' }) },
  delete: (data) => { dispatch({ data: data ,type: 'deleted' }) },

})

const mapStateToProps = state => ({
  todoList: state,
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
