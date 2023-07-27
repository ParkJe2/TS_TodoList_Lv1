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
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  `,

  Input: styled.input`
    width: 25%;
    height: 35px;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    margin: 0 0 5px 15px;
  `,

  AddBtn: styled.button`
    color: #000;
    width: 80px;
    height: 35px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin: 0 0 7px 25px;
    background-color: #f6bd60;
  `,
};
