export type Music = {
  title: string;
  singerName: string;
  type: 'artist' | 'band';
  imgUrl: string;
  id: string | null;
  musicGenres: {
    rock: boolean;
    electronic: boolean;
    pop: boolean;
    country: boolean;
    hipHop: boolean;
    metal: boolean;
    rap: boolean;
    other: boolean;
  };
  country: string;
  releaseDate: Date;
};
