var playlist = {jBalvin: 'Ginza'}; 

function updatePlaylist(playlist,philOchs,){
  playlist.philOchs = "Here's to the state of Mississippi";
  return playlist; 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist;
} 
