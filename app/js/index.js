window.onload = function () {
  document.addEventListener('click', documentActions);
  document.addEventListener('click', carousel);
	
  function documentActions(e) {
     e.preventDefault()
  }
}
