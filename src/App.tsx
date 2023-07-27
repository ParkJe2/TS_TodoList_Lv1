import React, { useState } from "react";
import "./App.css";
import Header from "./common/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

// Todo 아이템 타입 정의
interface TodoItem {
  id: string;
  title: string;
  content: string;
}

function App() {
  // 로컬스토리지에 저장된 Todo리스트 불러오기 / 없으면 빈 배열로 초기화
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  // 로컬스토리지에 저장된 Done 리스트 불러오기 / 없으면 빈 배열로 초기화
  const [doneTodos, setDoneTodos] = useState<TodoItem[]>(() => {
    const storedDoneTodos = localStorage.getItem("doneTodos");
    return storedDoneTodos ? JSON.parse(storedDoneTodos) : [];
  });

  // Todo 리스트가 변경될 때마다 로컬 스토리지에 저장
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("doneTodos", JSON.stringify(doneTodos));

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <div className="list-container">
        <h2 className="list-title">Working...🔥</h2>
        <div className="todo-wrap">
          {todos.map((item) => (
            <TodoList
              key={item.id}
              item={item}
              todos={todos}
              setTodos={setTodos}
              doneTodos={doneTodos}
              setDoneTodos={setDoneTodos}
              isDone={false}
            />
          ))}
        </div>
        <h2 className="list-title">Done...🥳</h2>
        <div className="todo-wrap">
          {doneTodos.map((item) => (
            <TodoList
              key={item.id}
              item={item}
              todos={todos}
              setTodos={setTodos}
              doneTodos={doneTodos}
              setDoneTodos={setDoneTodos}
              isDone={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
