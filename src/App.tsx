import React, { useState } from "react";
import "./App.css";
import TodoInput from "./component/TodoInpput";
import { todo } from "./component/TodoInterface";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [arryValue, setArryValue] = useState<todo[]>([]);

  const addDataHandler = (): void => {
    // Perform delete action or any other logic here
    let data: todo[] = [...arryValue];

    if(!todo){
      return
    }

    let obj: todo = {
      id: new Date().getTime(),
      todo: todo,
      isActive: true,
    };

    data.push(obj);
    setArryValue(data);
    setTodo("");
  };

  return (
    <>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        addDataHandler={addDataHandler}
      />

      {arryValue.map((data, index) => (
        <div className="flex-value" key={index}>
          <p>{data.todo}</p>
          <p>{data.id}</p>
          <p>{data.isActive?"true":'false'}</p>
        </div>
      ))}
    </>
  );
};

export default App;
