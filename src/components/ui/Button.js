import classes from './Button.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Button = ({ children, to, ...props }) => {
	if (to) {
		return (
			<Link {...props} className={classes.Button} to={to}>
				{children}
			</Link>
		);
	} else {
		return (
			<button {...props} className={classes.Button}>
				{children}
			</button>
		);
	}
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string
};

export default Button;
