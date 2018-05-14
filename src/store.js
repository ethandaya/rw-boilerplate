import { initStore } from 'react-waterfall'
import devtools from 'react-waterfall-redux-devtools-middleware'
import _actions from './actions';


const prod = process.env.NODE_ENV === 'production'

const store = {
  initialState: {
    loading: false,
    items: {},
  },
  actions: {
    ..._actions,
  },
}

export const {
  Provider,
  Consumer,
  actions,
  getState,
  connect,
  subscribe,
} = initStore(store, !prod && devtools())
