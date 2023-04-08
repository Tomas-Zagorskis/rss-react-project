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
      <div className={classes.backdrop} onClick={handleCloseModal}></div>
      <section className={classes.modal}>
        <div onClick={handleCloseModal} className={classes.close}>
          X
        </div>
        <img src={item.urls.full} alt="photo" />
      </section>
    </>
  );
};

export default CardModal;
