import { useCallback } from "react";
import FrameParent from "../components/frame-parent";
import "./desktop.css";

const Desktop = () => {
  const onSignUpLoginTextClick = useCallback(() => {
    // Please sync "signUp page" to the project
  }, []);

  return (
    <div className="desktop-2">
      <div className="main-frame">
        <header className="main-frame-child" />
        <img className="cm-4-1" loading="eager" alt="" src="/cm-4-1@2x.png" />
        <div className="signuplogin" onClick={onSignUpLoginTextClick}>
          SignUp/Login
        </div>
      </div>
      <FrameParent />
    </div>
  );
};

export default Desktop;
