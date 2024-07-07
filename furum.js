document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signinForm');
    const postForm = document.getElementById('postForm');
    const postsDiv = document.getElementById('posts');

    let signedInUser = '';

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        signedInUser = username;
        alert(`Welcome, ${signedInUser}!`);
        document.querySelector('.signin').classList.add('hidden');
        document.querySelector('.forum').classList.remove('hidden');
    });

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (signedInUser === '') {
            alert('You need to sign in first.');
            return;
        }

        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        const postTitleElement = document.createElement('h3');
        postTitleElement.textContent = postTitle;

        const postContentElement = document.createElement('p');
        postContentElement.textContent = postContent;

        const postUserElement = document.createElement('p');
        postUserElement.textContent = `Posted by: ${signedInUser}`;

        postDiv.appendChild(postTitleElement);
        postDiv.appendChild(postContentElement);
        postDiv.appendChild(postUserElement);

        postsDiv.appendChild(postDiv);

        postForm.reset();
    });
});
