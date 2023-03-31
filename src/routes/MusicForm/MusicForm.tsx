import React, { useState } from 'react';
import { Music } from 'types/types';
import CardList from '../../components/CardList/CardList';
import Form from '../../components/Form/Form';
import PopUp from '../../components/UI/PopUp/PopUp';

const MusicForm: React.FC = () => {
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  if (success) {
    setTimeout(() => setSuccess(false), 2000);
  }

  const handleSubmit = (formData: Music) => {
    setMusicList((prevState) => [...prevState, formData]);
    setSuccess(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <PopUp msg="Form successfully submitted!" display={success} />
      {musicList.length === 0 ? null : <CardList cards={musicList} />}
    </>
  );
};

export default MusicForm;
