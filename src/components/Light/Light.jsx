import { useSelector } from "react-redux";
import s from "./Light.module.css";
import { selectLight } from "../../redux/selectors";
export const Light = () => {
  const { color, gradient } = useSelector(selectLight);
  return (
    <div className={s.light}>
      <div
        style={{ height: 18.5, borderBlockColor: color, background: gradient }}
      ></div>
      <div
        style={{ height: 17, borderBlockColor: color, background: gradient }}
      ></div>
      <div
        style={{ height: 15.5, borderBlockColor: color, background: gradient }}
      ></div>
      <div
        style={{ height: 14.5, borderBlockColor: color, background: gradient }}
      ></div>
      <div
        className={s.last}
        style={{ height: 13, borderBlockColor: color, background: gradient }}
      ></div>
    </div>
  );
};
