import { useState } from 'react';
import {marked} from 'marked';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Note = ({ note, notes, setNotes }) => {
  const [text, setText] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleNote = (e) => {
    setIsEditable((edit) => !edit);

    const newNotes = notes.map((obj) =>
      obj.id === note.id ? { ...note, text: marked(text) } : obj
    );

    setNotes(newNotes);
  };

  const handleDelete = () => {
    const newNotes = notes.filter((obj) => obj.id !== note.id);

    setNotes(newNotes);
  };

  return (
    <div className="note">
      <div className="tools">
        <button type="button" className="edit" onClick={handleNote}>
          <FaEdit />
        </button>
        <button type="button" className="delete" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </div>
      <div
        className={`${isEditable ? 'hidden' : ''}`}
        dangerouslySetInnerHTML={{ __html: note.text }}
      />
      <textarea
        className={`${isEditable ? '' : 'hidden'}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Note;