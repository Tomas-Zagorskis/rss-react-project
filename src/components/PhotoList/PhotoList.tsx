import { FC } from 'react';
import PhotoItem from './PhotoItem/PhotoItem';
import classes from './PhotoList.module.css';
import { useGetPhotosQuery } from 'features/unsplash/unsplashApi';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { useAppSelector } from 'app/hooks';

const PhotoList: FC = () => {
  const search = useAppSelector((state) => state.search.value);
  const { data, isFetching, isError } = useGetPhotosQuery(search);

  if (isError) return <h2>Oops, something went wrong...</h2>;

  if (isFetching) return <h2>Loading...</h2>;

  let photos: Basic[];
  if (data?.results) {
    photos = data.results;
  } else {
    photos = data as unknown as Basic[];
  }
  if (photos.length === 0 && !isFetching) return <h2>No Images Found by search "{search}"...</h2>;

  const itemMap = photos.map((item) => <PhotoItem item={item} key={item.id} />);

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default PhotoList;
