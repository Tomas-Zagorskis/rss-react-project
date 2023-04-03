export type Music = {
  title: string;
  singerName: string;
  type: Types;
  imgUrl?: string;
  imgFile?: FileList;
  id: string | null;
  musicGenres: string[];
  country: string;
  releaseDate: Date;
};

export enum Genres {
  rock = 'Rock',
  electronic = 'Electronic',
  pop = 'Pop',
  jazz = 'Jazz',
  hipHop = 'HipHop',
  metal = 'Metal',
  rap = 'Rap',
  other = 'Other',
}
export enum Types {
  artist = 'Artist',
  band = 'Band',
}
