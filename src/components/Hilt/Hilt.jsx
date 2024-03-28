import s from "./Hilt.module.css";
export const Hilt = () => {
  return (
    <div className={s.hils}>
      <div className={s.first}>
        <div className={s.firstLeft}>
          <span></span>
        </div>
        <div className={s.firstCenter}></div>
        <div className={s.firstEnd}></div>
      </div>
      <div className={s.second}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={s.third}>
        <div className={s.third}>
          <div
            style={{
              width: 15,
              height: 30,
              backgroundColor: "rgb(202, 204, 160)",
            }}
          ></div>
          <div
            style={{
              width: 5,
              height: 49,
              backgroundColor: "rgb(202, 204, 160)",
            }}
          ></div>
          <div
            style={{
              width: 10,
              height: 40,
              backgroundColor: "rgb(202, 204, 160)",
            }}
          ></div>
        </div>
        <div
          style={{
            width: 25,
            height: 25,
            backgroundColor: "rgb(191, 153, 129)",
          }}
        ></div>
        <div className={s.third}>
          <div
            style={{
              width: 5,
              height: 30,
              backgroundColor: "#7e7e7e",
            }}
          ></div>
          <div
            style={{
              width: 12,
              height: 40,
              backgroundColor: "#7e7e7e",
            }}
          ></div>
          <div
            style={{
              width: 10,
              height: 49,
              backgroundColor: "#7e7e7e",
            }}
          ></div>
          <div
            style={{
              width: 7,
              height: 60,
              backgroundColor: "#7e7e7e",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
