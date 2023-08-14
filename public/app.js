document.addEventListener('DOMContentLoaded', async () => {
    const postList = document.getElementById('post-list');
  
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
  
      const posts = data.posts;
  
      posts.forEach(post => {
        const postItem = document.createElement('li');
        postItem.classList.add('post-item');
  
        const titleElement = document.createElement('h3');
        titleElement.classList.add('post-title');
        titleElement.textContent = post.title;
  
        const contentElement = document.createElement('p');
        contentElement.classList.add('post-content');
        contentElement.textContent = post.content;
  
        postItem.appendChild(titleElement);
        postItem.appendChild(contentElement);
  
        postList.appendChild(postItem);
      });
    } catch (error) {
      console.error('Error fetching and displaying posts:', error);
    }
  });
  