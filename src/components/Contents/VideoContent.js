import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Title from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import Info from '../Info';

export const VideoContent = ({ value }) => (
  <div className="video">
    <Container className="container--md">
      <video
        controls
        poster={value.artworkUrl100.replace('100x100', '800x800')}
      >
        <source src={value.previewUrl} type="video/mp4" />
      </video>
    </Container>

    <Container className="container--sm">
      <div className="content__header--video">
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        {value.collectionId ? <AlbumLink value={value} /> : null}
        <ArtistLink value={value} />
        <Info value={value} />
      </div>
    </Container>
  </div>
);

VideoContent.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    collectionId: PropTypes.number
  })
};
