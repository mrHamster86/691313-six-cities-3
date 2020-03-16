import * as React from 'react';
import Header from '../header/header';
import {Operation as OperationUser} from '../../reducer/user/user';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AppRoute from '../../AppRoute';
import {ActionCreator as ActionCreatorOffers} from '../../reducer/offers/offers';
import {RefObject} from "react";

type Login = {
  email: string;
  password: string;
}

interface Props {
  login: (Login) => void;
  changeCity: (string) => void;
}

type State = null;

export class SingIn extends React.PureComponent<Props, State> {
  props: Props;
  state: State;
  CITY: string;
  _formRef: RefObject<HTMLFormElement>;

  constructor(props) {
    super(props);
    this.CITY = `Amsterdam`;
    this._formRef = React.createRef();
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._handleCityClick = this._handleCityClick.bind(this);
  }

  _handleSubmitForm(event) {
    event.preventDefault();
    const {login} = this.props;
    const formData = new FormData(this._formRef.current);

    login({
      email: formData.get(`email`),
      password: formData.get(`password`),
    });
  }

  _handleCityClick() {
    const {changeCity} = this.props;
    changeCity(this.CITY);
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <Header/>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                ref={this._formRef}
                onSubmit={this._handleSubmitForm}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email"
                    name="email" placeholder="Email" required={true}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password"
                    name="password" placeholder="Password" required={true}/>
                </div>
                <button className="login__submit form__submit button"
                  type="submit">Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  to={AppRoute.MAIN}
                  onClick={this._handleCityClick}
                >
                  <span>{this.CITY}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
const mapDispatchToProps = {
  login: (authData) => OperationUser.login(authData),
  changeCity: (city) => ActionCreatorOffers.changeCity(city),
};

export default connect(null, mapDispatchToProps)(SingIn);
