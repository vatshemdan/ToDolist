import { useState } from "react";
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListElement from "./components/listElements/ListElement.js";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  function addItem() {
    setList((olditems) => {
      return [...olditems, text];
    });
    setText("");
  }

  function onDelete(id) {
    setList((olditems) => {
      return olditems.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="headingContainer">
        <h2>ToDo List</h2>
      </div>
      <div className="containerMiddle">
        <div className="containerMiddleTop">
          <input
            type="text"
            className="inputElement"
            placeholder="Add list item"
            onChange={handleChange}
            value={text}
          />
          <AddCircleIcon
            onClick={addItem}
            className="addLogo"
            fontSize="large"
          />
        </div>
        <div className="containerList">
          <ul className="list">
            {list.map((e, index) => {
              return (
                <ListElement
                  key={index}
                  element={e}
                  id={index}
                  handleDelete={onDelete}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
