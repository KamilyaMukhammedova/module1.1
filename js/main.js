document.getElementById('menuBtn').addEventListener('click', () => {
  const menu = document.getElementById('menuList');
  menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
});

window.addEventListener('resize', function (event) {
  if (window.innerWidth > 997) {
    document.getElementById('menuList').style.display = 'block';
  } else {
    document.getElementById('menuList').style.display = 'none'
  }
});