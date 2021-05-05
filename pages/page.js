
const sidebarInfo = document.querySelector('.sidebar-info')
const sidebar = document.querySelector('.sidebar')
const sidebarBtnLeft = document.querySelector('.sidebar-info-btn-left')
const sidebarBtnRight = document.querySelector('.sidebar-info-btn-right')

sidebarBtnRight.addEventListener('click', () => {
  sidebar.classList.add('sidebar-hidden')
  sidebarInfo.classList.remove('sidebar-hidden')
})
sidebarInfo.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-hidden')
  sidebarInfo.classList.add('sidebar-hidden')

})