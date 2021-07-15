import React,{ useState } from "react";

const CreateArea =(props)=>{
    
    const[note,setNote]=useState({
        title:"",
        content:""
    });

    const handleChange=(e)=>{
  const{ name, value}=e.target;

  setNote(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      }
  })
    }
    
  const submitNote=(e)=>{
    props.onAdd(note)
    setNote({
      title:"",
      content:""
  })
    e.preventDefault();
}
    return(
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take notes..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;