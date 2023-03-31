import { FC } from 'react';
import classes from './InvalidText.module.css';

const InvalidText: FC<{ error: boolean; msg: string }> = ({ error, msg }) => {
  return (
    <p style={{ textAlign: 'center' }}>
      &nbsp;{error && <span className={classes.invalid}>{msg}</span>}
    </p>
  );
};
export default InvalidText;
