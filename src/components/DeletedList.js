import React from 'react';
import { connect } from 'react-redux';
import MaterialIcon from 'material-icons-react';


class DeletedList extends React.Component {

onDelete(data){
  this.props.undoDelete(data);
}

  render() {
  return (
    <div className="deletedList">
      {
        this.props.DeletedList.deleted.length > 0 ? <h3>Deleted List</h3> : <p></p>
      }
    {this.props.DeletedList.deleted.map((data, index) => 
        <li key={data.id}>{data.actions}<span className="icon clear"><MaterialIcon icon="undo" onClick={()=> this.onDelete(data)}>undo delete</MaterialIcon></span></li>
    )}  
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => ({
  undoDelete: (data) => { dispatch({ data: data ,type: 'UndoDeleted' }) },

})

const mapStateToProps = state => ({
  DeletedList: state,
});


export default connect(mapStateToProps, mapDispatchToProps)(DeletedList)
