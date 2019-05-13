const songsReducer = () => {
  return [
    { title: 'Wish you were here', duration: '4:05'},
    { title: 'Starway to heaven', duration: '7:05'},
    { title: 'Let it be', duration: '3:35'},
    { title: 'Garota de ipanema', duration: '4:35'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type = 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
