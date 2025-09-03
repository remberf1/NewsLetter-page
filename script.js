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
