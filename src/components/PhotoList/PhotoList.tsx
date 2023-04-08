import { FC, useEffect, useState } from 'react';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import classes from './PhotoList.module.css';
import PhotoItem from './PhotoItem/PhotoItem';
import { api } from 'api/api';

type Props = {
  query: string;
};

const PhotoList: FC<Props> = ({ query }) => {
  const [collection, setCollection] = useState<ApiResponse<Photos> | null>(null);

  useEffect(() => {
    api.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 10,
      })
      .then((data) => {
        setCollection(data);
        console.log(data);
      });
  }, [query]);

  const itemMap = collection?.response?.results.map((item) => (
    <PhotoItem item={item} key={item.id} />
  ));

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default PhotoList;
