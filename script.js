document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');
  
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      mainContent.classList.toggle('with-sidebar');
    });
  });
  