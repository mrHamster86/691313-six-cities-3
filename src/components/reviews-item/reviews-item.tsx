import * as React from 'react';
import * as moment from 'moment';
import MAX_RATING from '../../constatnts';

interface Props {
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const ReviewsItem: React.FC<Props> = (props: Props) => {
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

export default ReviewsItem;
