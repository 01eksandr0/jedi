import { Control } from "../Control/Control";
import { Sword } from "../Sword/Sword";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.container}>
      <Sword />
      <Control />
    </div>
  );
};
