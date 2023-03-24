export type Music = {
  title: string;
  artistName: string;
  artistType: string;
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
    jazz: boolean;
  };
  country: string;
  releaseDate: Date;
};
