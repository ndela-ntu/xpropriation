import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

interface StarRatingProps {
  rating: number; // The rating number (e.g., 4.5)
  maxStars?: number; // Optional maximum stars (default: 5)
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = [];

  // Generate stars based on rating
  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      // Full star
      stars.push(<Star key={i} className="text-black" />);
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(<StarHalf key={i} className="text-black" />);
    } else {
      // Empty/outline star
      stars.push(<StarOutline key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
