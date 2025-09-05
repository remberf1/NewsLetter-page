const openBtn = document.querySelector('.open-sidebar');
const closeBtn = document.querySelector('.close-sidebar');
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  sidebar.classList.add('active');     // slide sidebar in
  closeBtn.hidden = false;
  openBtn.hidden = true;
  openBtn.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  sidebar.classList.remove('active');  // slide sidebar out
  closeBtn.hidden = true;
  openBtn.hidden = false;
  openBtn.setAttribute('aria-expanded', 'false');
}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);

// Keyboard support
function handleKey(e, action) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    action();
  }
}

openBtn.addEventListener("keydown", (e) => handleKey(e, openSidebar));
closeBtn.addEventListener("keydown", (e) => handleKey(e, closeSidebar));
