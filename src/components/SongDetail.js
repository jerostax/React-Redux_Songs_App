import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song) {
    return <div>Selectionnez une chanson</div>
  }
  return (
    <div>
      <h3>Détails pour:</h3>
      <p>
        Titre: {song.title}
        <br />
        Durée: {song.duration}
      </p>

    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong }
};
export default connect(mapStateToProps)(SongDetail);
