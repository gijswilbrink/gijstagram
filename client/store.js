/**
 * Import framework
 */
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

/**
 * Import sample data
 */
import comments from './data/comments';
import posts from './data/posts';

/**
 * Create default state
 */
const defaultState = {
	posts,
	comments
};

/**
 * Enable redux devTools
 */
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * Create store
 */
const store = createStore(rootReducer, defaultState, enhancers);

/**
 * Export
 */
export const history = syncHistoryWithStore(browserHistory, store);
export default store;