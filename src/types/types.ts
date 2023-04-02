export type Music = {
  title: string;
  singerName: string;
  type: types;
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
  jazz = 'Jazz',
  hipHop = 'HipHop',
  metal = 'Metal',
  rap = 'Rap',
  other = 'Other',
}
export enum types {
  artist = 'Artist',
  band = 'Band',
}
