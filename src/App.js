import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Note from './Note.js';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNewNote = () => {
    setNotes([...notes, { id: notes.length + 1, text: '' }]);
  };

  return (
    <div className="App">
      <button type="button" className="add" onClick={addNewNote}>
        <FaPlus /> Add note
      </button>
      <div className='container-notes'>
        {notes.length > 0 &&
          notes.map((note) => (
            <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
          ))}
      </div>
    </div>
  );
}

export default App;