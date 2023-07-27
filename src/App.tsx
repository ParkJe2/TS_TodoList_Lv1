import React, { useState } from "react";
import Header from "./common/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import GlobalStyle from "./GlobalStyle";
import { styled } from "styled-components";

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
    <>
      <GlobalStyle />
      <StLayout>
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <StListContainer>
          <StListTitle>Working...🔥</StListTitle>
          <StTodoWarp>
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
          </StTodoWarp>
          <StListTitle>Done...🥳</StListTitle>
          <StTodoWarp>
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
          </StTodoWarp>
        </StListContainer>
      </StLayout>
    </>
  );
}
export default App;

export const StLayout = styled.div`
  margin: 0 auto;
  min-width: 800px;
  max-width: 1200px;
`;

export const StListContainer = styled.div`
  padding: 0 55px;
`;

export const StListTitle = styled.h2`
  margin: 25px;
  font-size: 25px;
  font-weight: bold;
`;

export const StTodoWarp = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
`;
