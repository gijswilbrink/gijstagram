/**
 * Import framework
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

/**
 * Import components
 */
import Main from './Main';

/**
 * Apply state and actions to Main component
 */
function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

/**
 * Export
 */
export default App;