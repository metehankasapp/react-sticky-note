import { useContext, useState } from "react";
import MainContext from "../context/MainContext";

const NoteBox = () => {
  const ctx = useContext(MainContext);

  const types = [
    {
      name: "comment",
      color: "red",
      text: "Yorum",
    },
    {
      name: "private-comment",
      color: "#999",
      text: "Gizli Yorum",
    },
    {
      name: "note",
      color: "orange",
      text: "Not",
    },
  ];

  const [color, setColor] = useState(types[0].color);
  const [note, setNote] = useState();

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSetNote = (e) => {
    setNote(e.currentTarget.value);
  };

  const addNote = () => {
    const currentNote = {
      id: ctx.notes.length + 1,
      note: note,
      color: color,
      number:ctx.notes.length + 1,
      position: {
        x: ctx.boxPos.x,
        y: ctx.boxPos.y,
      },
    };
    ctx.setNotes([...ctx.notes, currentNote]);
    ctx.setBoxVisible(false);
    ctx.setMode(false);
  };

  return (
    <div
      onMouseEnter={() => ctx.setMode(false)}
      onMouseLeave={() => ctx.setMode(true)}
      className="note-box"
      style={{
        "--color": color,
        position: "absolute",
        top: ctx.boxPos.y,
        left: ctx.boxPos.x,
      }}
    >
      <span className="note-box-number">{ctx.notes.length + 1}</span>
      <select
        name=""
        id=""
        onChange={handleChange}
        style={{ backgroundColor: color }}
      >
        {types.map((type) => (
          <option value={type.color}>{type.text}</option>
        ))}
      </select>
      <textarea cols="30" rows="5" onChange={handleSetNote} />

      <button onClick={addNote} disabled={!note}>
        ekle
      </button>
    </div>
  );
};

export default NoteBox;
