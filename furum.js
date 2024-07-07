document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signinForm');
    const loginButton = document.getElementById('loginButton');
    const postForm = document.getElementById('postForm');
    const postsDiv = document.getElementById('posts');
    const forumDiv = document.querySelector('.forum');
    const signinDiv = document.querySelector('.signin');
    const logoutButton = document.getElementById('logoutButton');

    let signedInUser = '';
    let profilePicUrl = '';

    // Check if user details exist in localStorage
    if (localStorage.getItem('username') && localStorage.getItem('profilePicUrl')) {
        loginButton.classList.remove('hidden');
    }

    const loadPosts = () => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        postsDiv.innerHTML = '';
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const postTitleElement = document.createElement('h3');
            postTitleElement.textContent = post.title;

            const postContentElement = document.createElement('p');
            postContentElement.textContent = post.content;

            const postInfoDiv = document.createElement('div');
            postInfoDiv.classList.add('post-info');

            const postUserImg = document.createElement('img');
            postUserImg.src = post.profilePicUrl;

            const postUserElement = document.createElement('span');
            postUserElement.textContent = `Posted by: ${post.username}`;

            postInfoDiv.appendChild(postUserImg);
            postInfoDiv.appendChild(postUserElement);

            postDiv.appendChild(postTitleElement);
            postDiv.appendChild(postContentElement);
            postDiv.appendChild(postInfoDiv);

            postsDiv.appendChild(postDiv);
        });
    };

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const profilePic = document.getElementById('profilePic').files[0];

        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicUrl = e.target.result;
            signedInUser = username;
            localStorage.setItem('username', username);
            localStorage.setItem('profilePicUrl', profilePicUrl);
            alert(`Welcome, ${signedInUser}!`);
            signinDiv.classList.add('hidden');
            forumDiv.classList.remove('hidden');
            loadPosts();
        }
        reader.readAsDataURL(profilePic);
    });

    loginButton.addEventListener('click', () => {
        signedInUser = localStorage.getItem('username');
        profilePicUrl = localStorage.getItem('profilePicUrl');
        if (signedInUser && profilePicUrl) {
            alert(`Welcome back, ${signedInUser}!`);
            signinDiv.classList.add('hidden');
            forumDiv.classList.remove('hidden');
            loadPosts();
        } else {
            alert('No previous sign-in details found. Please sign in first.');
        }
    });

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (signedInUser === '') {
            alert('You need to sign in first.');
            return;
        }

        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({
            title: postTitle,
            content: postContent,
            username: signedInUser,
            profilePicUrl: profilePicUrl
        });

        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
        postForm.reset();
    });

    logoutButton.addEventListener('click', () => {
        signedInUser = '';
        profilePicUrl = '';
        alert('You have been logged out.');
        forumDiv.classList.add('hidden');
        signinDiv.classList.remove('hidden');
        loginButton.classList.remove('hidden');
        signinForm.reset();
    });
});
