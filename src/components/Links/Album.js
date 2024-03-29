import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

const Album = ({ value }) => (
  <p>
    <Link
      className="link content__link--album"
      to={`/album/${queryString(value.collectionName)}/${value.collectionId}`}
    >
      {value.collectionName}
    </Link>
  </p>
);

Album.propTypes = {
  value: PropTypes.shape({
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired
  })
};

export default Album;
