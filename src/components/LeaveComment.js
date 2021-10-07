import { useContext } from "react";
import MainContext from "../context/MainContext";





function LeaveComment(props) {

    const ctx = useContext(MainContext)


  return (
    <div className="fflwme" style={{ top: ctx.position.y, left: ctx.position.x + 20 }}>
      Yorum yazmak için tıkla
    </div>
  );
}


export default LeaveComment;