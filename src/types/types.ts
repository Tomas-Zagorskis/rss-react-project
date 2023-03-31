export type Music = {
  title: string;
  singerName: string;
  type: 'artist' | 'band';
  imgUrl?: string;
  imgFile?: FileList;
  id: string | null;
  musicGenres: string[];
  country: string;
  releaseDate: Date;
};

export enum genres {
  rock = 'Rock',
  electronic = 'Electronic',
  pop = 'Pop',
  country = 'Country',
  hipHop = 'HipHop',
  metal = 'Metal',
  rap = 'Rap',
  other = 'Other',
}
