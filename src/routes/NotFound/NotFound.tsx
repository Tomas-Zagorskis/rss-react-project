import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <article className={classes['not-found']}>
      <h2>
        404 <br />
        PAGE NOT FOUND
      </h2>
      <Link to="/" className={classes.btn}>
        Home
      </Link>
    </article>
  );
};

export default NotFound;
