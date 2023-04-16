import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

const PopUp: FC<{ display: boolean; msg: string }> = ({ display, msg }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={display}
      timeout={300}
      classNames="popup"
      mountOnEnter
      unmountOnExit
    >
      <div ref={nodeRef}>{msg}</div>
    </CSSTransition>
  );
};

export default PopUp;
