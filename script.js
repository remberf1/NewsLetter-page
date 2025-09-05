const openBtn = document.querySelector('.open-sidebar');
const closeBtn = document.querySelector('.close-sidebar');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
  sidebar.hidden = false;
  closeBtn.hidden = false;
  openBtn.hidden = true;
});

closeBtn.addEventListener('click', () => {
  sidebar.hidden = true;
  closeBtn.hidden = true;
  openBtn.hidden = false;
});

function handleKey(e, action) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    action();
  }
}

openBtn.addEventListener("keydown", (e) => handleKey(e, openSidebar));
closeBtn.addEventListener("keydown", (e) => handleKey(e, closeSidebar));
