'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Reviews.module.css';

type Review = {
  author_name: string;
  rating: number;
  text: string;
  time?: number;
  relative_time_description?: string;
  profile_photo_url?: string;
};

export default function Reviews({ placeId }: { placeId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    rating: 5,
    text: '',
    author: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!placeId) return;

    const loadReviews = async () => {
      try {
        setIsLoading(true);
        const cached = localStorage.getItem(`reviews-${placeId}`);
        const cachedReviews: Review[] = cached ? JSON.parse(cached) : [];
        
        if (cachedReviews.length > 0) {
          setReviews(cachedReviews);
        }

        const res = await fetch(`/api/reviews?placeId=${placeId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.result?.reviews) {
            const updatedReviews = mergeReviews(cachedReviews, data.result.reviews);
            setReviews(updatedReviews);
            localStorage.setItem(`reviews-${placeId}`, JSON.stringify(updatedReviews));
          }
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [placeId]);

  const mergeReviews = (existing: Review[], newReviews: Review[]) => {
    const existingKeys = new Set(existing.map(r => `${r.author_name}-${r.text}`));
    return [
      ...newReviews.filter(r => !existingKeys.has(`${r.author_name}-${r.text}`)),
      ...existing
    ].slice(0, 50); // Limit to 50 reviews
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would submit to your backend/Google API
      const userReview: Review = {
        author_name: newReview.author || 'Anonymous',
        rating: newReview.rating,
        text: newReview.text,
        time: Math.floor(Date.now() / 1000),
        relative_time_description: 'Just now'
      };

      setReviews(prev => [userReview, ...prev]);
      setNewReview({ rating: 5, text: '', author: '' });
      
      // Show success message
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = ({ rating, setRating }: { 
    rating: number; 
    setRating?: (rating: number) => void 
  }) => {
    return (
      <div className={styles.starRating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${styles.star} ${star <= rating ? styles.filled : ''}`}
            onClick={() => setRating && setRating(star)}
            disabled={!setRating}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.title}>Customer Reviews</h2>
      
      {/* Add Review Form */}
      <div className={styles.addReviewCard}>
        <h3>Share Your Experience</h3>
        <form onSubmit={handleSubmitReview}>
          <div className={styles.formGroup}>
            <label>Your Rating</label>
            <StarRating 
              rating={newReview.rating} 
              setRating={(rating) => setNewReview({...newReview, rating})} 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Your Name (Optional)</label>
            <input
              type="text"
              value={newReview.author}
              onChange={(e) => setNewReview({...newReview, author: e.target.value})}
              placeholder="Your name"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Your Review</label>
            <textarea
              value={newReview.text}
              onChange={(e) => setNewReview({...newReview, text: e.target.value})}
              placeholder="Share your experience..."
              required
              rows={4}
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      {isLoading ? (
        <div className={styles.loadingSpinner}></div>
      ) : reviews.length === 0 ? (
        <div className={styles.noReviews}>No reviews yet. Be the first to review!</div>
      ) : (
        <div className={styles.reviewsList}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                {review.profile_photo_url ? (
                  <div className={styles.avatar}>
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={48}
                      height={48}
                      unoptimized
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {review.author_name.charAt(0)}
                  </div>
                )}
                
                <div className={styles.reviewMeta}>
                  <h4 className={styles.authorName}>{review.author_name}</h4>
                  <div className={styles.ratingDate}>
                    <StarRating rating={review.rating} />
                    <span className={styles.reviewDate}>
                      {review.relative_time_description || 
                       (review.time ? new Date(review.time * 1000).toLocaleDateString() : '')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={styles.reviewContent}>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}