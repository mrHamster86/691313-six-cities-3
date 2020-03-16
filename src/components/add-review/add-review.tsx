import * as React from 'react';
import {RATING_STARS} from '../../constatnts';
import {
  formValidation,
  getRating,
  getReview,
} from '../../reducer/review/selectors';
import {connect} from 'react-redux';
import {
  ActionCreator as ActionCreatorReview,
  Operation as OperationReview,
} from '../../reducer/review/review';
import withBooleanState from '../../hocs/with-boolean-state/with-boolean-state';

type uploadReview = {
  rating: number;
  review: string;
  offerId: number;
}

interface Props {
  booleanState: boolean;
  onToggle: () => void;
  offerId: number;
  rating: number;
  review: string;
  isValidForm: boolean;
  setRating: () => void;
  changeReview: (string) => void;
  clearReview: () => void;
  uploadReview: (uploadReview) => Promise<void>;
}
type State = null;

export class AddReview extends React.PureComponent<Props, State> {
  props: Props;
  state: State;
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeReview = this._handleChangeReview.bind(this);
  }

  _handleChangeReview(event) {
    const {changeReview} = this.props;
    changeReview(event.target.value);
  }

  _handleSubmit(event) {
    const {
      rating,
      review,
      offerId,
      isValidForm,
      uploadReview,
      onToggle,
    } = this.props;

    event.preventDefault();
    if (isValidForm) {
      onToggle();
      uploadReview({rating, review, offerId})
      .then(() => {
        onToggle();
      }).catch(() => {
        onToggle();
      });
    }
  }

  _renderStars() {
    const {rating, setRating, booleanState} = this.props;

    const starsList = Object.keys(RATING_STARS).
      map((key) => Number(key)).
      sort((a, b) => b - a);

    return starsList.map((star) => (
      <React.Fragment key={star}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={star}
          id={`${star}-stars`}
          type="radio"
          onChange={setRating.bind({}, star)}
          checked={star === rating}
          disabled={booleanState}
        />
        <label
          htmlFor={`${star}-stars`}
          className="reviews__rating-label form__rating-label"
          title={RATING_STARS[star]}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </React.Fragment>));
  }

  render() {
    const {review, isValidForm, booleanState} = this.props;

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <label className="reviews__label form__label"
          htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {this._renderStars()}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          value={review}
          onChange={this._handleChangeReview}
          placeholder="Tell how was your stay, what you like and what can be improved"
          disabled={booleanState}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span
              className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50
            characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!isValidForm}
          >Submit
          </button>
        </div>
      </form>
    );
  }

  componentWillUnmount() {
    this.props.clearReview();
  }
}

const mapStateToProps = (state) => ({
  rating: getRating(state),
  review: getReview(state),
  isValidForm: formValidation(state),
});

const mapDispatchToProps = {
  setRating: (rating) => ActionCreatorReview.setRating(rating),
  changeReview: (review) => ActionCreatorReview.changeReview(review),
  clearReview: () => ActionCreatorReview.clear(),
  uploadReview: ({review, rating, offerId}) => OperationReview.uploadReview({review, rating, offerId}),
};

export default connect(mapStateToProps, mapDispatchToProps)(withBooleanState(AddReview));
