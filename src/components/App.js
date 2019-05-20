import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store/configureStore'
import StreamCreate from './Streams/StreamCreate'
import StreamDelete from './Streams/StreamDelete'
import StreamEdit from './Streams/StreamEdit'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={'/streams/delete'} component={StreamDelete} />
        <Route exact path={'/streams/show'} component={StreamShow} />
        <Route exact path={'/streams/edit'} component={StreamEdit} />
        <Route exact path={'/streams/new'} component={StreamCreate} />
        <Route exact path={'/'} component={StreamList} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
