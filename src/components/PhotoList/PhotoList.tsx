import { FC } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { useGetPhotosQuery } from 'features/photo/photoApiSlice';
import { useAppSelector } from 'app/hooks';
import PhotoItem from './PhotoItem/PhotoItem';
import classes from './PhotoList.module.css';

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
  if (photos.length === 0 && !isFetching)
    return <h2>No Images Found by search &quot;{search}&quot;...</h2>;

  const itemMap = photos.map((item) => <PhotoItem item={item} key={item.id} />);

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default PhotoList;
