import { FC, useState } from 'react';
import classes from './PhotoItem.module.css';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import CardModal from 'components/CardModal/CardModal';

type Props = { item: Basic };

const PhotoItem: FC<Props> = ({ item }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <li className={classes.item} onClick={() => setOpenModal(true)}>
        <img src={item.urls.small} alt="cover" />
        <h3>{item.user.name}</h3>
        <p className={classes.date}>{new Date(item.created_at).toLocaleDateString('en-GB')}</p>
        <br />
        <p className={classes.description}>{item.description}</p>
        <br />
        <p className={classes.likes}>Likes: {item.likes}</p>
      </li>
      {openModal && <CardModal item={item} onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default PhotoItem;
