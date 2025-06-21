// types/review.ts
export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
  profile_photo_url?: string;
}

export interface ReviewsResponse {
  result: {
    reviews?: GoogleReview[];
    name?: string;
    rating?: number;
  };
  status: string;
  error_message?: string;
}