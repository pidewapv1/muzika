import React, { Component } from 'react';
import { SongContent } from '../../components/Contents';
import { Spinner } from '../../components/Spinner';
import { song, lyrics } from '../../api';

import './Song.css';

export default class Song extends Component {
  state = { song: null, lyrics: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    song(id, res => {
      const data = res.data[0];
      const song = <SongContent value={data} />;

      this.setState({ song: song });

      lyrics(data.artistName, data.trackName, res =>
        this.setState({ lyrics: res.data })
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.song ? (
          <div className="song">
            {this.state.song}
            <div className="lyrics">
              {this.state.lyrics ? (
                this.state.lyrics.split('\n').map(item => (
                  <span>
                    {item}
                    <br />
                  </span>
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
