import NavItem from "./navItem";
import { css } from "@emotion/react";

export const navLinks = [
  { ruName: "Главная", enName: "Main page", path: "/" },
  {
    ruName: "Кошки",
    enName: "Cats",
    path: "/cats",
  },
  {
    ruName: "Собаки",
    enName: "Dogs",
    path: "/dogs",
  },
  {
    ruName: <NavItem item="Напишите нам" />,
    enName: <NavItem item="Contact us" />,
    path: "#contact",
  },
];

export const override = css`
  display: inline-block;
  position: absolute;
  left: 45vw;
  top: 45vh;
`;
