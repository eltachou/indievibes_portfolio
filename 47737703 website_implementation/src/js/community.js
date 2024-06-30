
// I acknowledge the use of ChatGPT for checking the comment POST API errors (later in this section).
// Prompts and resposnses from ChatGPT has been included in the Appendix with Poster.


// Clickable Join button in Community tab - Query Selector and then loop through all
const joinButtons = document.querySelectorAll('.artist-button');

joinButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.value === 'Join') {
            this.value = 'Joined';
            this.innerHTML = 'Joined';
            this.style.backgroundColor = '#37454D';
        } else {
            this.value = 'Join';
            this.innerHTML = 'Join';
            this.style.backgroundColor = '#5A6F7A';
        }
    });
});


// Like/Comment/Save button for Community - Query Selector and then loop through all
const likeButtons = document.querySelectorAll('.icon-container button.like-button');
const saveButtons = document.querySelectorAll('.icon-container button.save-button');

likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', function() {
        const heart = this.querySelector('i');
    
        if (heart.classList.contains('fa-heart-o')) {
            heart.classList.remove('fa-heart-o');
            heart.classList.add('fa-heart');
        } else {
            heart.classList.remove('fa-heart');
            heart.classList.add('fa-heart-o')
        }
    });
});


saveButtons.forEach((saveButton) => {
    saveButton.addEventListener('click', function() {
        const save = this.querySelector('i');
    
        if (save.classList.contains('fa-bookmark-o')) {
            save.classList.remove('fa-bookmark-o');
            save.classList.add('fa-bookmark');
        } else {
            save.classList.remove('fa-bookmark');
            save.classList.add('fa-bookmark-o')
        }
    });
});


// API
const mywebCode = 'indie-web';

// Comments GET API
const commentURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/comments/";

const getCommentsURL = `${commentURL}?website_code=indie-web`;
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(getCommentsURL, requestOptions)
.then(response => response.json())
.then(data => {

    const commentQuery = document.getElementById('comment-fetch');

    // Checks in the API if there are more than 1 data from IndieVibes (filtered with my website code)
    if (data.length > 0) {
        const latestComment = data[data.length - 1];
        // This const user turns the user's name by into a lowercase first name with @
        const user = "@" + latestComment.username.toLowerCase().split(" ")[0];
        const comment = latestComment.comment;

        // Create h4 and p for the comment GET
        const commentH4 = document.createElement('h4');
        commentH4.classList.add('username-api');
        const commentP = document.createElement('p');
        commentP.classList.add('comment-api')
        
        // Let the displaying comment correspond to the API data
        commentH4.textContent = user;
        commentP.textContent = comment

        // Add the created h4 and p into the div
        commentQuery.appendChild(commentH4);
        commentQuery.appendChild(commentP)

    }
})

.catch(error => console.log('error', error));



// Comment POST API
const postCommentMethod = 'POST';
const commentForm = document.getElementById('comment-form');
const commentUser = document.getElementById('comment-user');
const commentContent = document.getElementById('comment-content');

const handleCommentPost = event => {
    event.preventDefault();

    // Add website input data onto the API
    let commentData = new FormData(event.target);
    commentData.append('id', 'N/A');
    commentData.append('username', commentUser.value);
    commentData.append('comment', commentContent.value);
    commentData.append('website_code', mywebCode);

    const postcommentOptions = {
        method: postCommentMethod,
        body: commentData
    }

    fetch(commentURL, postcommentOptions)
        .then(response => {
            if (!response.ok) {
                console.log('Server Response:', response);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Updated comment!');
            location.reload();
        })
        .catch(error => {
            console.error('Problem occurred with fetch:', error.message);
            alert('Failed to comment. Please try again.');
            console.log('error', error);
        });
}

commentForm.addEventListener('submit', handleCommentPost);
