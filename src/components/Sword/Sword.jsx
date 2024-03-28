import { Hilt } from "../Hilt/Hilt";
import { Light } from "../Light/Light";
import s from "./Sword.module.css";
export const Sword = () => {
  return (
    <div className={s.container}>
      <Hilt />
      <Light />
    </div>
  );
};
