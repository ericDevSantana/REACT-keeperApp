import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
   const [allNotes, setNotes] = React.useState([]);

   function addNote(note) {

      // Add object Note to allNotes
      setNotes((prevNotes) => {
         return [...prevNotes, note]
      });
   }

   function deleteNote(index) {
      setNotes((prevNotes) => {
         return prevNotes.filter((notes, id) => {
            return id !== index;
         });
      });
   }

   return <div>
    <Header/>
    <CreateArea onADD={addNote}/>

    {allNotes.map((note, index) => (
       
      <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              />
      ))}

    <Footer/>
   </div>    
}

export default App;