// Copy IP to clipboard
function copyIP() {
  const ip = 'introduction-perfume.gl.at.ply.gg:40238';
  navigator.clipboard.writeText(ip).then(() => {
    alert('Server IP copied!');
  });
}

// Example server status simulation
window.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('server-status');
  const countEl = document.getElementById('player-count');
  const listEl = document.getElementById('player-list');

  // Placeholder live data
  statusEl.textContent = 'Online';
  statusEl.classList.add('online');
  const players = ['Player1','Player2','Player3'];
  countEl.textContent = players.length;
  listEl.innerHTML = '';
  players.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    listEl.appendChild(li);
  });
});
