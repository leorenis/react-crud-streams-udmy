import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store/configureStore'
import history from '../history'
import StreamCreate from './Streams/StreamCreate'
import StreamDelete from './Streams/StreamDelete'
import StreamEdit from './Streams/StreamEdit'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './Header'

const App = () => (
  <Provider store={store}>
    <div className={'ui container'}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path={'/streams/delete'} component={StreamDelete} />
          <Route exact path={'/streams/show'} component={StreamShow} />
          <Route exact path={'/streams/edit/:id'} component={StreamEdit} />
          <Route exact path={'/streams/new'} component={StreamCreate} />
          <Route exact path={'/'} component={StreamList} />
        </Switch>
      </Router>
    </div>
  </Provider>
)

export default App
