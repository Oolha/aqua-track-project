import css from './UserBar.module.css';

const UserBar = ({}) => {
  return (
    <div>
      <button type="button" className={css.button}>
        <h4 className={css.name}>Name</h4>
        {/* <img src="" alt="avatar" /> */}
        <svg className={css.icon}>
          <use href="../../assets/icons/sprite.svg#chevron-down-2"></use>
        </svg>
      </button>
    </div>
  );
};

export default UserBar;
