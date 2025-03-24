import scss from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={scss.backdrop}>
      <div className={scss.spinner}></div>
    </div>
  );
};

export default Loader;
