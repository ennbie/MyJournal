document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/entries') {
        fetch('/api/entries')
            .then(response => response.json())
            .then(entries => {
                const container = document.getElementById('entriesContainer');
                entries.forEach(entry => {
                    const entryDiv = document.createElement('div');
                    entryDiv.innerHTML = `
                        <h3>${entry.title}</h3>
                        <p>${entry.content}</p>
                        <small>${entry.date}</small>
                    `;
                    container.appendChild(entryDiv);
                });
            });
    }
});
