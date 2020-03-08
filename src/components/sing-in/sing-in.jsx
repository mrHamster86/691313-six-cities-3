import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {Operation} from '../../reducer/user/reducer';
import {connect} from 'react-redux';

export class SingIn extends PureComponent {
  constructor(props) {
    super(props);
    this._formRef = React.createRef();
    this._handleSubmitForm = this._handleSubmitForm.bind(this);
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
                         name="email" placeholder="Email" required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password"
                         name="password" placeholder="Password" required=""/>
                </div>
                <button className="login__submit form__submit button"
                        type="submit">Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
const mapDispatchToProps = {
  login: (authData) => Operation.login(authData)
};

SingIn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SingIn);
