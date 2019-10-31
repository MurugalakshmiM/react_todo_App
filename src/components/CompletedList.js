import React from 'react';
import { connect } from 'react-redux';
import MaterialIcon from 'material-icons-react';
import './TodoList.css'


class CompletedList extends React.Component {

onDelete(data){
  this.props.delete(data);
}

  render() {
  return (
    <div className="completedList">
       {
        this.props.completedList.completed.length > 0 ? <h3>Completed List</h3> : <p></p>
      }
    {this.props.completedList.completed.map((data, index) => 
        <li key={data.id}>{data.actions}<span className="icon clear"><MaterialIcon icon="clear" onClick={()=> this.onDelete(data)}>delete</MaterialIcon></span></li>
    )}  
    
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => ({
  delete: (data) => { dispatch({ data: data ,type: 'deleted' }) },

})

const mapStateToProps = state => ({
  completedList: state,
});


export default connect(mapStateToProps, mapDispatchToProps)(CompletedList)
