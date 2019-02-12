import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const to = (category) => {
      if (category.id === '1') {
        return '/all'
      } else {
        return `/category/${category.id}`
      }
    };

    return (
      <ul>
        {this.props.categories.map((category) => {
          return (
            <li key={ `nav-item-${category.id}` }>
              <Link to={ to(category) }>
                { category.name }
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Nav;
