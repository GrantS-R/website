function getSavedSongs() {
    return getStorearray("playlist"); 
}
function getStorearray(key) {
    let playlistArray = localStorage.getItem(key);
    if (playlistArray == null || playlistarray == "") {
        playlistArray = new array();
    }
    else {
        playlistArray = JSON.parse(playlistarray); return playlistarray;
    }
    return playlistArray;
}