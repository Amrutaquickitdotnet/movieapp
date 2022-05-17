
import { ItemTvShows } from '../components/itemtvshows/itemtvshows';
import { Genre } from './genre';

export interface TvShow {
  backdrop_path?: string, 
  first_air_date?: string,
  genre_ids?: Array<number> , 
  id?: number,
  name?: string,
  origin_country?: Array<string>, 
  original_language?: string, 
  original_name?: string,
  overview?: string, 
  popularity?: number, 
  poster_path?: string,
  vote_average?: number, 
  vote_count?: number
  routePath?: string;
    
  genres: Genre[];
}

export interface TvShowDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShowVideoDto {
  id: number;
  results: TvShowVideo[];
}

export interface TvShowVideo {
  site: string;
  key: string;
}

export interface TvShowImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface TvShowCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export const mapTvShowToItem = (tvShow: TvShow): ItemTvShows => {
  return {
    id: tvShow.id,
    original_name: tvShow.original_name,
    poster_path: tvShow.poster_path,
    vote_average: tvShow.vote_average,
    backdrop_path: tvShow.backdrop_path,
    vote_count: tvShow.vote_count,
    first_air_date: tvShow.first_air_date,
    overview: tvShow.overview,
    routePath: '/tvshows/' + tvShow.id
  };
};
