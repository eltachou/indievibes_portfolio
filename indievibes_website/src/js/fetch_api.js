const mywebCode = 'indie-web';

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Top 10 Songs GET API - Used in findmusic to songs page as music query: "this is what we found"
// Dynamic website function referenced from darkyodeler
const musicURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/top10songs/";

fetch(musicURL, requestOptions)
.then(response => response.json())
.then(data => {

    const musicQuery = document.getElementById('music-query');

    data.forEach(artist => {
        const musicianQuery = artist.artist;
        const songQuery = artist.title;
        const genreQuery = artist.genre;
        const coverQuery = artist.song_photo;
        console.log(musicianQuery, songQuery, genreQuery);

        // Creating Cards for Music Query
        const artistLi = document.createElement('li');
        artistLi.classList.add('music-card');
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('music-img');
        const coverImage = document.createElement('img');
        const songTitle = document.createElement('h3');
        const artistName = document.createElement('p');
        const songGenre = document.createElement('p');
        songGenre.classList.add('genre-style');

        // Let the displayed music correspond to the API data
        artistName.textContent = musicianQuery;
        songTitle.textContent = songQuery;
        songGenre.textContent = genreQuery;
        coverImage.src = coverQuery;

        // Add the created elements into the ul (Same structure as the music & artist cards)
        artistLi.appendChild(artistDiv);
        artistDiv.appendChild(coverImage);
        artistDiv.appendChild(songTitle);
        artistDiv.appendChild(artistName);
        artistDiv.appendChild(songGenre);
        musicQuery.appendChild(artistLi);
    });
  })
  .catch(error => console.log('error', error));




// Musician Upload POST API
const uploadURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";
const postMusicAudioMethod = 'POST';
const uploadMusic = document.getElementById('upload-form');
const songTitle = document.getElementById('input-song-title');
const artistName = document.getElementById('input-artist');
const formGenre = document.getElementById('select-genre');
const musicFile = document.getElementById('add-file');

const handleMusicUpload = event => {
    event.preventDefault();

    // Add website input data onto the API
    let formData = new FormData(event.target);
    formData.append('id', 'N/A');
    formData.append('name', artistName.value);
    formData.append('song_title', songTitle.value);
    formData.append('genre', formGenre.value);
    formData.append('description', 'N/A');
    formData.append('message', 'N/A');
    formData.append('audio_file', musicFile.files[0]);
    formData.append('website_code', mywebCode);

    const postrequestOptions = {
        method: postMusicAudioMethod,
        body: formData
    }

    fetch(uploadURL, postrequestOptions)
        .then(response => {
            if (!response.ok) {
                console.log('Server Response:', data);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Music upload completed!');
            location.reload();
        })
        .catch(error => {
            console.error('Problem occurred with fetch:', error.message);
            alert('Failed to upload music. Please try again.');
            console.log('error', error);
        });
}

uploadMusic.addEventListener('submit', handleMusicUpload);



// Music upload GET API
const getUploadsURL = `${uploadURL}?website_code=indie-web`;

fetch(getUploadsURL, requestOptions)
.then(response => response.json())
.then(data => {

    const uploadedMusic = document.getElementById('uploaded-music');

    // Reversing the list generated, hence showing the newest upload first
    data = data.reverse();

    data.forEach(music => {
        const yourName = music.name;
        const yourSong = music.song_title;
        const yourGenre = music.genre;

        // Creating cards for uploaded music
        const yourLi = document.createElement('li');
        yourLi.classList.add('music-card');
        const yourDiv = document.createElement('div');
        yourDiv.classList.add('music-img');
        const yoursongTitle = document.createElement('h3');
        const yourartistName = document.createElement('p');
        const yoursongGenre = document.createElement('p');
        yoursongGenre.classList.add('genre-style');

        // Let the displayed music correspond to the API data
        yourartistName.textContent = yourName;
        yoursongTitle.textContent = yourSong;
        yoursongGenre.textContent = yourGenre;

        // Add the created elements into the ul (Same structure as the music & artist cards, but no img)
        yourLi.appendChild(yourDiv);
        yourDiv.appendChild(yoursongTitle);
        yourDiv.appendChild(yourartistName);
        yourDiv.appendChild(yoursongGenre)
        uploadedMusic.appendChild(yourLi);
    });
  })
  .catch(error => console.log('error', error));
