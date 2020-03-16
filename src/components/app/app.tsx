import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import AppRoute from '../../AppRoute';
import RedirectRoute from '../redirect-route/redirect-route';
import {AuthorizationStatus} from '../../reducer/user/user';
import {connect} from 'react-redux';
import Favorites from '../favorites/favorites';
import history from '../../history';
import {getStatus} from '../../reducer/user/selectors';
import OfferDetail from '../offer-detail/offer-detail';

interface Props {
  authorizationStatus: string;
}

const App: React.FC<Props> = ({authorizationStatus}: Props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <RedirectRoute
          exact={true}
          path={AppRoute.LOGIN}
          redirectPath={AppRoute.MAIN}
          isRedirect={authorizationStatus === AuthorizationStatus.AUTH}
          render={() => <SingIn/>}
        />
        <RedirectRoute
          exact={true}
          path={AppRoute.FAVORITES}
          redirectPath={AppRoute.LOGIN}
          isRedirect={authorizationStatus === AuthorizationStatus.NO_AUTH}
          render={() => <Favorites/>}
        />
        <Route
          exact
          path={AppRoute.OFFER}
          render={({match}) => <OfferDetail
            offerId={Number(match.params.id)}/>}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getStatus(state),
});

export default connect(mapStateToProps, null)(App);
