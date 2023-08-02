import { styled } from "styled-components";

interface TodoListStyleProps {
  isDone: boolean;
}

export const St = {
  TodoContainer: styled.div<TodoListStyleProps>`
    width: 330px;
    display: flex;
    min-height: 180px;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 10px;
    word-break: break-all;
    flex-direction: column;
    justify-content: center;
    border: 3px solid #4f4557;
    background-color: ${(props) => (props.isDone ? "#440a67" : "#f5f5f5")};
  `,

  TodoTitle: styled.h2<TodoListStyleProps>`
    font-size: 18px;
    font-weight: bold;
    padding: 5px 10px;
    padding-bottom: 15px;
    word-break: break-all;
    color: ${(props) => (props.isDone ? "#fff" : "#000")};
  `,

  TodoContent: styled.div<TodoListStyleProps>`
    font-size: 16px;
    padding: 5px 10px;
    word-break: break-all;
    color: ${(props) => (props.isDone ? "#fff" : "#000")};
  `,

  BtnDiv: styled.div`
    gap: 15px;
    width: 85%;
    display: flex;
    padding: 20px 0 10px;
  `,
  DelBtn: styled.button<TodoListStyleProps>`
    width: 50%;
    height: 40px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #ce1212;
    background-color: transparent;
    color: ${(props) => (props.isDone ? "#fff" : "#000")};
  `,
  DoneBtn: styled.button<TodoListStyleProps>`
    width: 50%;
    height: 40px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #440a67;
    background-color: transparent;
    color: ${(props) => (props.isDone ? "#fff" : "#000")};
  `,
};
