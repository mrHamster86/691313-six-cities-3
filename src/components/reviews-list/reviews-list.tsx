import * as React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {connect} from 'react-redux';
import {getSortReview} from '../../reducer/property/selectors';
import AddReview from '../add-review/add-review';
import {getStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Review} from "../../types";

interface Props {
  reviews: Review[];
  propertyId: number;
  userStatus: string;
}

export const ReviewsList: React.FC<Props> = ({reviews, propertyId, userStatus}: Props) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span
        className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review, index) => {
          return index < 10
            ? <ReviewsItem
              key={review.id}
              user={review.user.name}
              avatar={review.user[`avatar_url`]}
              rating={review.rating}
              date={review.date}
              text={review.comment}
            />
            : null;
        })}
      </ul>
      {userStatus === AuthorizationStatus.AUTH && <AddReview offerId={propertyId}/>}
    </section>
  );
};

const mapStateToProps = (state) => ({
  reviews: getSortReview(state),
  userStatus: getStatus(state),
});

export default connect(mapStateToProps, null)(ReviewsList);
