// Fetch and render notes from notes.json
async function fetchAndDisplayNotes() {
    const res = await fetch('data/notes.json');
    const chapters = await res.json();
    const container = document.getElementById('notesContainer');
  
    chapters.forEach(chapter => {
      const section = document.createElement('div');
      section.className = 'mb-6';
  
      const heading = document.createElement('h4');
      heading.className = 'text-lg font-bold text-leafgreen mb-2';
      heading.textContent = chapter.chapter;
  
      const list = document.createElement('ul');
      chapter.files.forEach(note => {
        const item = document.createElement('li');
  
        // Encode parameters safely
        const encodedTitle = encodeURIComponent(note.title);
        const encodedURL = encodeURIComponent(note.url);
        const encodedChapter = encodeURIComponent(chapter.chapter);
  
        item.innerHTML = `
          <a href="note.html?chapter=${encodedChapter}&title=${encodedTitle}&url=${encodedURL}" 
             class="text-blue-600 hover:underline" 
             target="_blank">
             ${note.title}
          </a>
        `;
        list.appendChild(item);
      });
  
      section.appendChild(heading);
      section.appendChild(list);
      container.appendChild(section);
    });
  }
  
  
  
  // Fetch and render videos from videos.json
  async function fetchAndDisplayVideos() {
    try {
      const response = await fetch('data/videos.json');
      const videos = await response.json();
      const container = document.getElementById('videosContainer');
  
      videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow';
        card.innerHTML = `
          <h4 class="font-semibold text-lg mb-2">${video.title}</h4>
          <iframe width="100%" height="250" src="${video.url}" frameborder="0" allowfullscreen></iframe>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error loading videos:', error);
    }
  }
  
  // Load everything on page load
  fetchAndDisplayNotes();
  fetchAndDisplayVideos();
  