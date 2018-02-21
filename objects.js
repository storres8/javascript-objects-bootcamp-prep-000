var playlist = {
  jBalvin: 'Ginza',
  drake: 'Over'
}; 

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle; 
  playlist
  return playlist; 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist;
} 
