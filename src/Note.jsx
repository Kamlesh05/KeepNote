import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

export default function Note(props) {
  const [note, setNote] = useState({
    title:'',
    content:''
  })

  const [expand,SetExpand]=useState(false);

  const fetch = (e)=>{
    const {name,value}=e.target;

    setNote((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }

const addData = ()=>{
if(note.title==''){
  alert('Pleae add the title of your note.');
}
else if(note.content == ''){
  alert('Please add the content of your note.')
}
else{
  props.getDataFromNote(note);
    setNote({ 
    title:'',
    content:''});
}
}

const expandIt =()=>{
  return SetExpand(true);
}

    return (
        <div className="main col-md-10 mx-auto">
        <div>
          <form className="note">
            { expand ?
            <input name='title' value={note.title} onChange={fetch} type="text" placeholder="Title"  />
            :null}
            <textarea name='content' value={note.content} onChange={fetch} rows='4' cols='50' className="noteArea" placeholder="Take a Note ..." onClick={expandIt} />
            {expand ?
            <Button className="btnAdd" onClick={addData}><AddBoxOutlinedIcon fontSize='large'/></Button>
            : null}
          
          </form>
        </div>
      </div>
    )
}
