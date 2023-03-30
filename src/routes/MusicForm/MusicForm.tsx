import React, { useState } from 'react';
import { Music } from 'types/types';
import CardList from '../../components/CardList/CardList';
import Form from '../../components/Form/Form';

const MusicForm: React.FC = () => {
  const [musicList, setMusicList] = useState<Music[]>([]);

  const handleSubmit = (formData: Music) => {
    setMusicList((prevState) => [...prevState, formData]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {musicList.length === 0 ? null : <CardList cards={musicList} />}
    </>
  );
};

export default MusicForm;
