document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const newsContainer = document.getElementById('news-container');

    // Show progress bar while loading
    progressBar.style.visibility = 'visible';

    fetch('/news')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Hide progress bar after loading
            progressBar.style.visibility = 'hidden';

            // Process and display news items
            Object.values(data).forEach(newsItem => {
                const { imagelink, title, desc, newslink, Ques_in_News_Enabled, Creative_in_News_Enabled } = newsItem;

                // Check if the item should be excluded
                if (Ques_in_News_Enabled === "Yes" || Creative_in_News_Enabled === "Yes") {
                    return;
                }

                const newsCard = document.createElement('div');
                newsCard.classList.add('news-card');

                const image = document.createElement('img');
                image.src = imagelink;
                image.alt = title;
                newsCard.appendChild(image);

                const newsTitle = document.createElement('h3');
                newsTitle.innerText = title;
                newsCard.appendChild(newsTitle);

                const newsDesc = document.createElement('p');
                newsDesc.innerText = desc;
                newsCard.appendChild(newsDesc);

                newsCard.addEventListener('click', () => {
                    window.open(newslink, '_blank');
                });

                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            // Hide progress bar on error
            progressBar.style.visibility = 'hidden';
        });
});
