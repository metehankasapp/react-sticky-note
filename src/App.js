import { useRef, useEffect, useState } from "react";
import LeaveComment from "./components/LeaveComment";
import "./App.css";
import MainContext from "./context/MainContext";
import Note from "./components/Note";
import NoteBox from "./components/NoteBox";

function App() {
  const screen = useRef(null);
  const [mode, setMode] = useState(false);
  const [boxPos, setBoxPos] = useState({
    x: 0,
    y: 0,
  });
  const [notes, setNotes] = useState([
    {
      id: 1,
      note: "test notu",
      color: "red",
      position: {
        x: 100,
        y: 250,
      },
    },
  ]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [boxVisible, setBoxVisible] = useState(false);

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
      setBoxVisible(!boxVisible);

    }
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleClick = (e) => {
    if (mode) {
      setBoxPos({ x: e.pageX, y: e.pageY });

      setBoxVisible(true);
    }
  };

  useEffect(() => {
    screen.current.focus();
  }, []);

  const data = {
    position,
    notes,
    boxPos,
    setMode,
    setNotes,
    setBoxVisible
  };

  return (
    <MainContext.Provider value={data}>
      <div
        onClick={handleClick}
        ref={screen}
        tabIndex={0}
        onMouseMove={handleMouseMove}
        className={`screen ${mode && "editable"}`}
        onKeyUp={handleKeyUp}
      >
        <img src="https://webso.cool/images/radyosfer.jpg" alt="img" />
        {mode && <LeaveComment />}

        {notes && notes.map((note) => <Note key={note.id} note={note}/>)}

        {boxVisible && <NoteBox />}
      </div>
    </MainContext.Provider>
  );
}

export default App;
