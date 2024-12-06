import css from './UserBar.module.css';
import { Icon } from '../Icon/Icon';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { RxAvatar } from 'react-icons/rx';
import {
  useFloating,
  shift,
  offset,
  flip,
  autoUpdate,
  useClick,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import { useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  selectAuthUser,
  selectIsLoggedIn,
  selectUserDisplayName,
} from '../../redux/auth/selectors';

const UserBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectAuthUser);

  const displayedName = isLoggedIn && user?.name ? user.name : 'User';

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);
  return (
    <>
      <button
        type="button"
        ref={refs.setReference}
        {...getReferenceProps()}
        className={css.btn}
      >
        <h4 className={css.name}>{displayedName}</h4>
        {user?.avatar ? (
          <img src={user.avatar} alt="User avatar" className={css.avatar} />
        ) : (
          <RxAvatar className={css.avatar} />
        )}
        <Icon
          id="icon-menu"
          className={clsx(css.icon, {
            [css.rotated]: isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <UserBarPopover closePopover={() => setIsOpen(false)} />
          {/* <UserBarPopover closePopover={() => setIsOpen(false)} /> */}
        </div>
      )}
    </>
  );
};

export default UserBar;
