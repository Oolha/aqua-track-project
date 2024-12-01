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

const UserBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <h4 className={css.name}>Name</h4>
        <RxAvatar className={css.avatar} />
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
          <UserBarPopover />
        </div>
      )}
    </>
  );
};

export default UserBar;
