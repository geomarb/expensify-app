// o que esse cara faz:
// cria as rotas a serem executadas apenas no browser, sem fazer request no server ao trocar de pagina
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <div>
          <Switch>
              <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
