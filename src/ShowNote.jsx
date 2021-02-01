import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


 const ShowNote = (props)=> {
  const removeData = ()=>{
    props.deleteData(props.id);
  }
    return (
      <div className="showNote my-3">
          <div>
            <form className="note">
              <input name='title' value={props.title}  type="text" placeholder="Title" />
              <textarea name='content' value={props.content}  rows='4' cols='32' className="noteArea" placeholder="Take a Note ..."/>
              <Button className='btnDelete' onClick={removeData}><DeleteOutlineIcon fontSize='large'/></Button>
            </form>
          </div>
        </div>
     
    )
}

export default ShowNote;