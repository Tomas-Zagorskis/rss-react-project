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
  };
  country: string;
  releaseDate: string;
};
