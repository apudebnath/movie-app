fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPosts(data))

const setPosts = (posts) => {
    //console.log(posts);
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        console.log(post);
        const postDiv = document.createElement('div');
        // postDiv.classList.add('post p-5 bg-light border border-primary border-3 m-3 rounded');
        postDiv.innerHTML=`
        <div class="post p-5 bg-light border border-success border-3 m-3 rounded-pill text-center">
        <h3>Title:${post.title}</h3>
        <p>Description:${post.body}</p>
        <p>Post ID:${post.id}</p>
        `;
        postContainer.appendChild(postDiv);
    })
}