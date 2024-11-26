import Icons from '../../assets/icons/sprite.svg';

export const Icon = ({ id, className, size }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons + '#' + id}></use>
    </svg>
  );
};
