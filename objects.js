var playlist = {jBalvin: 'Ginza'}; 

function updatePlaylist(playlist,artistName,songTitle){
  playlist['PhilOchs'] = "Here's to the state of Mississippi";
  return playlist; 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist;
} 
