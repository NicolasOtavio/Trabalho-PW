document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articles');

    fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article-item';

                const title = document.createElement('h2');
                title.textContent = article.title;
                articleDiv.appendChild(title);

                const summary = document.createElement('p');
                summary.textContent = article.summary;
                articleDiv.appendChild(summary);

                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = 'Read more';
                link.target = '_blank';
                articleDiv.appendChild(link);

                articlesContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            articlesContainer.innerHTML = '<p>An error occurred while fetching the news articles.</p>';
        });
});
