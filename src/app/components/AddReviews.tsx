import React from "react";
import styles from '../styles/components/AddReviews.module.css';

interface AddReviewProps {
  placeId: string;
  buttonText?: string;
  className?: string;
}

const AddReview: React.FC<AddReviewProps> = ({
  placeId,
  buttonText = "Leave a Google Review",
  className = "",
}) => {
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  const handleClick = () => {
    window.open(reviewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleClick}
        className={`${styles.button} ${className}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AddReview;

