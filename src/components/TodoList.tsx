import React from "react";
import { St } from "./TodoListStyle";

// Todo 아이템 타입 정의
interface TodoItem {
  id: string;
  title: string;
  content: string;
}

// TodoList 컴포넌트에 전달되는 props 타입 정의
interface TodoListProps {
  // 현재 렌더링되는 Todo 아이템 객체
  item: TodoItem;
  // 전체 작업중인 Todo 아이템들을 담고 있는 배열
  todos: TodoItem[];
  // 작업중인 Todo 아이템 배열을 업데이트하는 useState의 setState 함수
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  // 전체 완료된 Todo 아이템을 담고 있는 배열
  doneTodos: TodoItem[];
  // 완료된 Todo 아이템 배열을 업데이트하는 useState의 setState 함수
  setDoneTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  // 현재 Todo 아이템이 완료된 상태인지 여부를 나타내는 불리언 값
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  item,
  todos,
  setTodos,
  doneTodos,
  setDoneTodos,
  isDone,
}) => {
  // '삭제' 버튼 클릭 이벤트
  const clickDelBtnHandler = (id: string) => {
    // 현재 선택한 Todo를 제외한 나머지로 새로운 작업중인 Todo 목록을 만들어 newWorkingTodos에 담는다.
    const newWorkingTodos = todos.filter((todo) => todo.id !== id);
    // 현재 선택한 Todo를 제외한 나머지 Done 목록을 만들어 newDoneTodos에 담는다.
    const newDoneTodos = doneTodos.filter((item) => item.id !== id);
    // Todo & Done 목록 업데이트
    setTodos(newWorkingTodos);
    setDoneTodos(newDoneTodos);
  };

  // '완료' 버튼 클릭 이벤트
  const clickDoneBtnHandler = (id: string): void => {
    // 선택한 Todo 아이디와 일치하는 Todo 아이템을 찾아 newDoneTodo에 담는다.
    const newDoneTodo = todos.find((item) => item.id === id);
    // newDoneTodo가 있는 경우
    if (newDoneTodo) {
      // 해당 Todo를 Done 목록에 추가하고,
      setDoneTodos([...doneTodos, newDoneTodo]);
      // 작업중인 Todo 목록에선 제거해준다.
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  // '취소' 버튼 클릭 이벤트
  const clickCancelBtnHandler = (id: string) => {
    // 선택한 Todo 아이디와 일치하는 Done 아이템을 찾아 canceledItem에 담는다.
    const canceledItem = doneTodos.find((item) => item.id === id);
    // canceledItem가 있는 경우
    if (canceledItem) {
      // 해당 Todo를 Done 목록에서 제거하고,
      const newDoneTodos = doneTodos.filter((item) => item.id !== id);
      setDoneTodos(newDoneTodos);
      // 해당 Todo를 작업중인 Todo목록에 추가한다.
      setTodos([...todos, canceledItem]);
    }
  };

  return (
    <St.TodoContainer key={item.id}>
      <St.TodoTitle>{item.title}</St.TodoTitle>
      <St.TodoContent>{item.content}</St.TodoContent>
      <St.BtnDiv>
        <St.DelBtn onClick={() => clickDelBtnHandler(item.id)}>삭제하기</St.DelBtn>
        {isDone ? (
          <St.DoneBtn onClick={() => clickCancelBtnHandler(item.id)}>취소</St.DoneBtn>
        ) : (
          <St.DoneBtn onClick={() => clickDoneBtnHandler(item.id)}>완료</St.DoneBtn>
        )}
      </St.BtnDiv>
    </St.TodoContainer>
  );
};

export default TodoList;
