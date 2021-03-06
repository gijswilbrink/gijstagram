/**
 * Import framework
 */
import React from 'react';
import { Link } from 'react-router';

/**
 * Component: Main
 * Renders pages requested by the router
 */
const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Gijstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
			</div>
		);
	}
});

/**
 * Export
 */
export default Main;