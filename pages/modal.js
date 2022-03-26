import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ReactDOM from "react-dom";

export default function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>Hello from modal</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

const StyledModalBody = css`
  padding-top: 10px;
`;

const StyledModalHeader = css`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = css`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;

const StyledModalOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
