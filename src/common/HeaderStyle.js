import { styled } from "styled-components";

export const St = {
  Header: styled.header`
    overflow: hidden;
    margin: 15px 15px 5px;
    color: #4f4557;
  `,

  Title: styled.li`
    font-size: 40px;
    font-weight: bold;

    padding-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  SubTitle: styled.li`
    float: right;
    font-size: 16px;
  `,
};
