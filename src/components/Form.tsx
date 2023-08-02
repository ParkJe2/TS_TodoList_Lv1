import React, { useState } from "react";
import { nanoid } from "nanoid/async";
// @types/nanoid 설치하려 했으나 nanoid는 자체 유형 정의를 제공하므로 설치할 필요가 없어 패키지 중단됨 확인
import { St } from "./FormStyle";

// Todo 아이템 타입 정의
interface TodoItem {
  id: string;
  title: string;
  content: string;
}

// Form 컴포넌트에 전달되는 props 타입 정의
interface FormProps {
  // 전체 Todo 아이템들을 담고 있는 배열
  todos: TodoItem[];
  // Todo 아이템 배열을 업데이트하는 useState의 setState 함수
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Form: React.FC<FormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const clickAddBtnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 불필요한 새로고침 동작 막기

    if (!title) return alert("제목을 입력해주세요");
    if (!content) return alert("내용을 입력해주세요");
    // 빈 값 검사

    try {
      // 비동기 nanoid 생성
      const newId = await nanoid();
      const newTodos: TodoItem = {
        id: newId,
        title,
        content,
      };

      // 새로운 Todo 아이템을 추가하여 Todo 리스트를 업데이트
      setTodos([...todos, newTodos]);
      // 제목 & 내용 인풋 초기화
      setTitle("");
      setContent("");
      // 기존 배열(todos)을 풀고 newTodos를 더해 새로운 배열로 변환
      // 제목, 내용 인풋값 초기화
    } catch (error) {
      console.error("nanoid 생성 실패 : ", error);
    }
  };

  return (
    <St.AddForm>
      <St.Group>
        <St.Input value={title} placeholder="제목을 입력해주세요" onChange={titleChangeHandler} />
        <St.Input
          value={content}
          placeholder="내용을 입력해주세요"
          onChange={contentChangeHandler}
        />
        <St.AddBtn onClick={clickAddBtnHandler}>추가하기</St.AddBtn>
      </St.Group>
    </St.AddForm>
  );
};

export default Form;
