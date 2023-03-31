import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

const PopUp: FC<{ display: boolean; msg: string }> = ({ display, msg }) => {
  return (
    <CSSTransition in={display} timeout={300} classNames="popup" mountOnEnter unmountOnExit>
      <div>{msg}</div>
    </CSSTransition>
  );
};

export default PopUp;
