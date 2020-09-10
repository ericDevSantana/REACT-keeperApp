import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    event.preventDefault();
    const {name, value} = event.target;
    
    setNote((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
    });
  }

  function submitNote(event){
    props.onADD(note);
    setNote({title:"", content:""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
