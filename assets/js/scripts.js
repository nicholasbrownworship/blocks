function copyIP() { const ip = 'introduction-perfume.gl.at.ply.gg:40238'; navigator.clipboard.writeText(ip).then(() => { alert('Server IP copied!'); }); }
window.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('server-status');
    const countEl = document.getElementById('player-count');
    const listEl = document.getElementById('player-list');
    statusEl.textContent = 'Online';
    countEl.textContent = '3';
    ['Player1','Player2','Player3'].forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        listEl.appendChild(li);
    });
});