import React from "react";

function ToDoOItem(props) {
  // const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoOItem;
