window.onload = init;
function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}

function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
    let li = document.createElement("li");
    li.innerHTML = songName;
    let ul = document.getElementById("playlist");
    ul.appendChild(li);
    if (songName == "") {
        alert("Please enter a song");
    } else {
        alert("Adding " + songName);
    }
    save(songName);
}
function save(item) {
    let playlistArray = getStorearray("playlist"); 
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray)); 
}
function loadPlaylist() {
    let playlistArray = getSavedSongs();
    let ul = document.getElementById("playlist");
    if (playlistArray != null) {
        for (let i = 0; i < playlistArray.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = playlistArray[i];
            ul.appendChild(li);
        }
    }
}

    