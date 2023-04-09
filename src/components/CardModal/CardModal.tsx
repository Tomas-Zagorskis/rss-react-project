import { FC } from 'react';
import classes from './CardModal.module.css';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

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
      <div className={classes.backdrop} data-testid="backdrop" onClick={handleCloseModal}></div>
      <section className={classes.modal}>
        <div onClick={handleCloseModal} className={classes.close}>
          X
        </div>
        <img src={item.urls.small} alt="photo" />
        <article>
          <div className={classes.likes}>
            <p>
              🧡<span>{item.likes}</span>
            </p>
            <p className={classes.date}>{new Date(item.created_at).toLocaleDateString('en-GB')}</p>
          </div>
          <h3 className={classes.title}>{item.user.name}</h3>
          {!!item.description ? (
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
