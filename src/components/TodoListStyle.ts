import { styled } from "styled-components";

export const St = {
  TodoContainer: styled.div`
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
  `,

  TodoTitle: styled.h2`
    font-size: 18px;
    font-weight: bold;
    padding: 5px 10px;
    padding-bottom: 15px;
    word-break: break-all;
  `,

  TodoContent: styled.div`
    font-size: 16px;
    padding: 5px 10px;
    word-break: break-all;
  `,

  BtnDiv: styled.div`
    gap: 15px;
    width: 85%;
    display: flex;
    padding: 20px 0 10px;
  `,
  DelBtn: styled.button`
    width: 50%;
    height: 40px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #ce1212;
    background-color: transparent;
  `,
  DoneBtn: styled.button`
    width: 50%;
    height: 40px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #440a67;
    background-color: transparent;
  `,
};
