export interface Cast {
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  original_language: string;
  production_companies: {
    name: string;
    logo_path: string;
  }[];
  credits?: {
    cast?: Cast[];
    crew?: any[]; 
  };
}
