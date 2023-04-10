import { FC } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import classes from './CardModal.module.css';

type Props = {
  item: Basic;
  onClose: () => void;
};

const CardModal: FC<Props> = ({ item, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <>
      <main className={classes.backdrop} onClick={handleCloseModal} role="main" />
      <section className={classes.modal}>
        <button type="button" onClick={handleCloseModal} className={classes.close}>
          X
        </button>
        <img src={item.urls.small} alt="" />
        <article>
          <div className={classes.likes}>
            <p>
              🧡<span>{item.likes}</span>
            </p>
            <p className={classes.date}>{new Date(item.created_at).toLocaleDateString('en-GB')}</p>
          </div>
          <h3 className={classes.title}>{item.user.name}</h3>
          {item.description ? (
            <p className={classes.description}>{item.description}</p>
          ) : (
            <p className={classes.description}>{item.alt_description}</p>
          )}
        </article>
      </section>
    </>
  );
};

export default CardModal;
