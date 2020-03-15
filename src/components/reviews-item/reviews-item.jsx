import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ReviewsItem = (props) => {
  const MAX_RATING = 5;
  const {
    user,
    avatar,
    rating,
    date,
    text,
  } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            alt={user}
            width="54"
            height="54"
          />
        </div>
        <span className="reviews__user-name">{user}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(rating / MAX_RATING) * 100}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{moment(date).format(`MMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewsItem;
