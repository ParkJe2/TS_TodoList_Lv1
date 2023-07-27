import { styled } from "styled-components";

export const St = {
  AddForm: styled.form`
    width: 100%;
    height: 130px;
    border-radius: 10px;
    margin-bottom: 30px;
    background-color: #85a392;
  `,

  Group: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 50px;
  `,

  Input: styled.input`
    width: 25%;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 0 5px 15px;
    padding-left: 15px;
  `,

  AddBtn: styled.button`
    width: 80px;
    height: 35px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    color: #000;
    font-weight: bold;

    margin: 0 0 7px 25px;
    background-color: #f6bd60;
  `,
};
