import { FC, useState } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import CardModal from 'components/CardModal/CardModal';
import classes from './PhotoItem.module.css';

type Props = { item: Basic };

const PhotoItem: FC<Props> = ({ item }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <li className={classes.item} onClick={() => setOpenModal(true)}>
        <img src={item.urls.small} alt="cover" />
        <div>
          <p className={classes.likes}>
            🧡<span>{item.likes}</span>
          </p>
          <p className={classes.date}>{new Date(item.created_at).toLocaleDateString('en-GB')}</p>
        </div>
      </li>
      {openModal && <CardModal item={item} onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default PhotoItem;
