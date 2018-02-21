var playlist = {
  jBalvin: 'Ginza',
  drake: 'Over'
}; 

function updatePlaylist(playlist,"Phil Ochs","Here's To The State Of Mississippi"){
  playlist['Phil Ochs'] = "Here's to the state of Mississippi";
  return playlist; 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist;
} 
