import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={s.button} onClick={handleLoadMore} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
