import React from 'react';
import { Link } from 'react-router-dom';

export const VideoContent = ({ value }) => {
  const album = value.collectionName
    ? value.collectionName.toLowerCase().replace(/ /g, '+')
    : null;
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="video">
      <div className="container--md">
        <video controls>
          <source src={value.previewUrl} type="video/mp4" />
        </video>
      </div>

      <div className="container--sm">
        <h2 className="title title--video">
          {value.trackName}
          <span className={value.trackExplicitness} />
        </h2>

        {value.collectionId ? (
          <Link
            className="link content__link--album"
            to={`/album/${album}/${value.collectionId}`}>
            <span>{value.collectionName}</span>
          </Link>
        ) : null}

        <p>
          By:{' '}
          <Link
            className="link content__link--artist"
            to={`/artist/${artist}/${value.artistId}`}>
            {value.artistName}
          </Link>
        </p>

        <p className="about about--video">
          {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};
