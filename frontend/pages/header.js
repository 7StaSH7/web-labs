import Link from "next/link";
import { navLinks } from "./data";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "/node_modules/primeflex/primeflex.css";
import { Toast } from "primereact/toast";
import { PanelMenu } from "primereact/panelmenu";
import { useAuth } from "../utils/auth";

export default function Header() {
  const auth = useAuth();
  const router = useRouter();
  const toast = useRef(null);
  
  const menuItems = [
    {
      label: auth.username,
      items: [
        {
          label: "Язык",
          icon: "pi pi-cog",
          items: [
            {
              label: "RU",
              command: () => {
                console.log("ru");
              },
            },
            {
              label: "EN",
              command: () => {
                console.log("en");
              },
            },
          ],
        },
        {
          label: "Выход",
          icon: "pi pi-sign-out",
          command: () => {
            console.log("logout");
          },
        },
      ],
    },
  ];

  const [usernameValue, setUsernameValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  
  const dialogFuncMap = {
    login: setLogin,
    register: setRegister,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    setUsernameValue("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsValidEmail(true);
    setIsValidUsername(true);
    dialogFuncMap[`${name}`](false);
  };

  const log = async () => {
    const data = await auth.login(email, password);
    if (data.meta) {
      if (data.meta.error.message === "user.password-not-match") {
        toast.current.show({
          severity: "error",
          summary: "Не тот пароль 😢",
          life: 3000,
        });
      }
    }

    if (data.data) {
      onHide("login");
      toast.current.show({
        severity: "success",
        summary: `Привет, ${data.data.username} 👋`,
        life: 3000,
      });
    }
  };
  const registration = async () => {
    const data = await auth.signUp(usernameValue, password, email);

    if (data.meta) {
      if (data.meta.error.message === "user.already-exist") {
        toast.current.show({
          severity: "error",
          summary: "Такой пользователь уже существует 😰",
          life: 3000,
        });
      }
    }
    if (data.data) {
      onHide("register");
      onClick("login");
      toast.current.show({
        severity: "success",
        summary: "Успешно зарегистрировались",
        life: 3000,
      });
    }
  };

  const renderFooter = (name) => {
    return name === "login" ? (
      <div className={styles.dialog_footer}>
        <Button
          label="Регистрация"
          onClick={() => {
            onClick("register");
            onHide(name);
          }}
          className="p-button-text"
        />
        <Button
          label="Войти"
          onClick={() => log()}
          className="mx-4"
          disabled={!(isValidUsername && isValidEmail && password !== "")}
        />
      </div>
    ) : (
      <div className={styles.dialog_footer}>
        <Button
          className="w-full"
          label="Зарегистрироваться"
          onClick={registration}
          disabled={
            !(
              isValidUsername &&
              isValidEmail &&
              password !== "" &&
              password == confirmPassword
            )
          }
        />
      </div>
    );
  };
  const validteEmail = (email) => {
    setEmail(email);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  };
  const validteUsername = (_username) => {
    setUsernameValue(_username);
    setIsValidUsername(_username.length > 3);
  };

  return (
    <header className={styles.header}>
      <Toast ref={toast} position="bottom-right" baseZIndex={20} />
      <div className={styles.site_name}>
        <h1 style={{ fontFamily: "Montserrat" }}>Animal forum</h1>
      </div>
      <nav>
        <ul className={styles.list}>
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li
                  className={`${styles.header_item} ${
                    router.pathname === link.path
                      ? styles.header__item_active
                      : ""
                  }`}
                >
                  <h3>{link.name}</h3>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {!auth.isLogined ? (
        <Button
          label="Войти"
          onClick={() => onClick("login")}
          className={styles.login}
        />
      ) : (
        <PanelMenu
          model={menuItems}
          id="popup_menu"
          className={styles.logined}
        />
      )}

      <Dialog
        footer={renderFooter("login")}
        visible={login}
        style={{ width: "25vw" }}
        draggable={false}
        onHide={() => onHide("login")}
        blockScroll={true}
        focusOnShow={false}
      >
        <div>
          {/* <div className="field w-full">
            <label htmlFor="login-username" className="block">
              Логин
            </label>
            <InputText
              id="login-username"
              value={username}
              onChange={(e) => validteUsername(e.target.value)}
              className={
                !isValidUsername ? `w-full p-invalid block` : `w-full block`
              }
              aria-describedby="login-username-help"
            />
            <small
              id="login-username-help"
              className={!isValidUsername ? `p-error block` : `hidden`}
            >
              Длина логина должна быть больше 3.
            </small>
          </div> */}
          <div className="field w-full">
            <label htmlFor="email" className="block">
              Почта
            </label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => validteEmail(e.target.value)}
              className={
                !isValidEmail ? `w-full p-invalid block` : `w-full block`
              }
              aria-describedby="email-help"
            />
            <small
              id="email-help"
              className={!isValidEmail ? `p-error block` : `hidden`}
            >
              Неверный email.
            </small>
          </div>
          <div className="field mt-4">
            <label htmlFor="password" className="block">
              Пароль
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputClassName="w-full"
              className="w-full"
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        footer={renderFooter("register")}
        visible={register}
        style={{ width: "25vw" }}
        draggable={false}
        onHide={() => onHide("register")}
        blockScroll={true}
        focusOnShow={false}
      >
        <div className="field w-full">
          <label htmlFor="register-username" className="block">
            Логин
          </label>
          <InputText
            id="register-username"
            value={usernameValue}
            onChange={(e) => validteUsername(e.target.value)}
            className={
              !isValidUsername ? `w-full p-invalid block` : `w-full block`
            }
            aria-describedby="register-username-help"
          />
          <small
            id="register-username-help"
            className={!isValidUsername ? `p-error block` : `hidden`}
          >
            Длина логина должна быть больше 3.
          </small>
        </div>
        <div>
          <div className="field mt-4 w-full">
            <label htmlFor="email" className="block">
              Почта
            </label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => validteEmail(e.target.value)}
              className={
                !isValidEmail ? `w-full p-invalid block` : `w-full block`
              }
              aria-describedby="email-help"
            />
            <small
              id="email-help"
              className={!isValidEmail ? `p-error block` : `hidden`}
            >
              Неверный email.
            </small>
          </div>
          <div className="field mt-4">
            <label htmlFor="password" className="block">
              Пароль
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputClassName="w-full"
              className="w-full"
            />
          </div>
          <div className="field mt-4">
            <label htmlFor="confirm-password" className="block">
              Подтвердите пароль
            </label>
            <Password
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputClassName="w-full"
              className="w-full"
            />
            <small
              id="confirm-password"
              className={
                !(password == confirmPassword) ? `p-error block` : `hidden`
              }
            >
              Пароли не совпадают
            </small>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
