var playlist = {
  jBalvin: 'Ginza',
  drake: 'Over'
}; 

function updatePlaylist(playlist,philOchs,heresToTheStateOfMississippi){
  playlist['Phil Ochs'] = "Here's to the state of Mississippi";
  return playlist; 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist;
} 
