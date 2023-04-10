import { FC, useEffect, useState } from 'react';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import api from 'api/api';
import PhotoItem from './PhotoItem/PhotoItem';
import classes from './PhotoList.module.css';

type Props = {
  query: string;
};

const PhotoList: FC<Props> = ({ query }) => {
  const [collection, setCollection] = useState<ApiResponse<Photos> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.search
      .getPhotos({
        query,
        page: 1,
        perPage: 10,
      })
      .then((data) => {
        if (!data.originalResponse.ok) throw Error('Could not get the data from server');
        setCollection(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [query]);

  if (error) return <h2>{error}</h2>;

  if (loading) return <h2>Loading...</h2>;

  if (collection?.response?.results.length === 0 && !loading)
    return <h2>No Images Found by search {query}</h2>;

  const itemMap = collection?.response?.results.map((item) => (
    <PhotoItem item={item} key={item.id} />
  ));

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default PhotoList;
