import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
   const [allNotes, setNewNote] = React.useState([]);

   function addNote(note) {
      // Add object Note to allNotes

      setNewNote((prevNotes) => {
         return [...prevNotes, note]
      });
   }

   return <div>
    <Header/>
    <CreateArea onADD={addNote}/>
    
    {allNotes.map((note, index) => (
       
      <Note
              key={index}
              title={note.title}
              content={note.content}/>
      ))}

    <Footer/>
   </div>    
}

export default App;