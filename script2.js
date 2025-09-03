const btn = document.getElementById('popup-btn');
  const popupMenu = document.getElementById('popupMenu');

  
  btn.addEventListener('click', function (event) {
    event.stopPropagation(); 
    popupMenu.style.display = 
      (popupMenu.style.display === 'block') ? 'none' : 'block';
  });

  // When clicking anywhere else → hide popup
  document.addEventListener('click', function (event) {
    if (!popupMenu.contains(event.target) && !btn.contains(event.target)) {
      popupMenu.style.display = 'none';
    }
  });

  const dev = document.getElementById('dev-btn');
  const modal = document.getElementById('devpopup');

  
  dev.addEventListener('click', function (event) {
    event.stopPropagation(); 
    modal.style.display = 
      (modal.style.display === 'block') ? 'none' : 'block';
  });

  // When clicking anywhere else → hide popup
  document.addEventListener('click', function (event) {
    if (!modal.contains(event.target) && !dev.contains(event.target)) {
      modal.style.display = 'none';
    }
  });