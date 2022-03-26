import NavItem from "./navItem";
import { css } from "@emotion/react";

export const navLinks = [
  { name: "Главная", path: "/" },
  {
    name: "Кошки",
    path: "/cats",
  },
  {
    name: "Собаки",
    path: "/dogs",
  },
  {
    name: <NavItem item="Напишите нам" />,
    path: "#contact",
  },
];

export const override = css`
  display: inline-block;
  position: absolute;
  left: 45vw;
  top: 45vh;
`;
