import { useDispatch } from "react-redux";
import s from "./Control.module.css";
import { changeColor } from "../../redux/lightSlice";

const obg = {
  red: {
    color: "red",
    gradient: " #f67676",
  },
  green: {
    gradient:
      "linear-gradient(245.43deg, rgb(203, 241, 200) -2.647%,rgb(217, 243, 215) 101.731%)",
    color: "green",
  },
  blue: {
    color: "blue",
    gradient:
      "linear-gradient(74.82deg, rgb(173, 221, 255) -0.055%,rgba(173, 221, 255, 0) 199.306%)",
  },
  purple: {
    color: "purple",
    gradient:
      "linear-gradient(245.43deg, #c284d5 -2.647%,rgb(209, 162, 211) 101.731%)",
  },
  yellow: {
    color: "yellow",
    gradient: " #f1f589",
  },
};
export const Control = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;

    dispatch(changeColor(obg[value].color, obg[value].gradient));
  };
  return (
    <div>
      <h2>Change</h2>
      <select onChange={handleChange}>
        <option>Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
};
