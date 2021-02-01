import React, { useState } from 'react';
import './SASS/Index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import ShowNote from './ShowNote';

const App = ()=>{

  const [data, setData]=useState([]);

  const getData = (note)=>{
    setData((preval)=>{
      return [...preval,note]
    })
    // alert(`Title: ${data.title}`);
  }

  const deleteNote = (id)=>{
    //if you use curly braces in short arrow function then you have to use return keyword to return something.
    //if you use pranthisis () then you dont have to return anything
    // here we have not specify curly braces for setData function as we dont want to return anything
     setData((oldData)=> (
       oldData.filter((currentData,indx)=>{
        return indx !== id;
      })
    )
     )
  }

  return(
    <>
     <Header/>
    <div className="con">
      <Note getDataFromNote={getData}/>
      <div className="showNoteCon">
    {  data.map((val,index)=>{
        return(
          <ShowNote title={val.title} content={val.content} key={index} id={index} deleteData={deleteNote}/>
        )
    })}
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default App;