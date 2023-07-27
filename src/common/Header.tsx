import React from "react";
import { St } from "./HeaderStyle";

function Header() {
  return (
    <St.Header>
      <ul>
        <St.Title>Todos</St.Title>
        <St.SubTitle>React TypeScript Project</St.SubTitle>
      </ul>
    </St.Header>
  );
}

export default Header;
