import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import {connect} from 'react-redux';
import {getSortReview} from '../../reducer/property/selectors';
import AddReview from '../add-review/add-review.jsx';
import {getStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';

export const ReviewsList = ({reviews, propertyId, userStatus}) => {
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

ReviewsList.propTypes = {
  userStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  propertyId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.exact({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.exact({
      'avatar_url': PropTypes.string,
      'id': PropTypes.number,
      'is_pro': PropTypes.bool,
      'name': PropTypes.string,
    }),
  })).isRequired,
};

export default connect(mapStateToProps, null)(ReviewsList);
