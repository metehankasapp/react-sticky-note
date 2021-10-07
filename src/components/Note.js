import { useState } from "react";
const Note = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="note-container"
      key={props.note.id}
      style={{
        backgroundColor: props.note.color,
        position: "absolute",
        top: props.note.position.y,
        left: props.note.position.x,
      }}
    >
      <span
        className="note-box-number"
        style={{ backgroundColor: props.note.color }}
        onClick={()=>{
            setVisible(!visible)
        }}
      >
        {props.note.number}
      </span>
      <div className="note" style={{ display: visible ? "flex" : "none" }}>
        {props.note.note}
      </div>
    </div>
  );
};

export default Note;
