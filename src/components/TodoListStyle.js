import { styled } from "styled-components";

export const St = {
  TodoContainer: styled.div`
    width: 330px;
    min-height: 180px;

    margin-bottom: 15px;

    border: 3px solid #4f4557;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    word-break: break-all;
  `,

  TodoTitle: styled.h2`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
    word-break: break-all;
    padding: 5px 10px;
  `,

  TodoContent: styled.div`
    font-size: 16px;
    word-break: break-all;
    padding: 5px 10px;
  `,

  BtnDiv: styled.div`
    width: 85%;
    padding: 20px 0 10px;

    display: flex;
    gap: 15px;
  `,
  DelBtn: styled.button`
    width: 50%;
    height: 40px;

    background-color: transparent;
    border: 2px solid #ce1212;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  `,

  DoneBtn: styled.button`
    width: 50%;
    height: 40px;

    background-color: transparent;
    border: 2px solid #440a67;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  `,
};
