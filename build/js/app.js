window.onload = function () {
  document.addEventListener('click', documentActions);
  document.addEventListener('click', carousel);
	
  function documentActions(e) {
     e.preventDefault()
  }
}
;
////                         Carousel                      ////

// CREATE CAROUSEL IMAGE

const sliderMainList = document.querySelectorAll('[data-slider="main"]');
Array.from(sliderMainList).map((sliderMain) => {
  const sliderBody = sliderMain.querySelector('[data-slider="body"]').children;
  sliderBody[0].classList.add('first');
	sliderBody[1].classList.add('second');
});

// CONTROL CAROUSEL

function carousel({ target }) {
  if (target.closest('[data-slider="control"]')) {
    const sliderMain = target.closest('[data-slider="main"]');
    const sliderBody = sliderMain.querySelector(
      '[data-slider="body"]'
    ).children;
    const sliderBodyList = Array.from(sliderBody);
    const first = sliderMain.querySelector('.first');
		const second = sliderMain.querySelector('.second');
		const firstId = sliderBodyList.indexOf(first);
    const secondId = sliderBodyList.indexOf(second);
     if (target.classList.contains('slider__arrow-next')) {
      const newFirstId =
			firstId == sliderBodyList.length - 1 ? 0 : firstId + 1;
      const newSecondId = secondId == sliderBodyList.length - 1 ? 0 : secondId + 1;
      carouselRun(newFirstId, newSecondId);
    }
    function carouselRun(newActiveId, newLasttId) {
      sliderBodyList[firstId].classList.remove('first');
      sliderBodyList[secondId].classList.remove('second');
      sliderBodyList[newActiveId].classList.add('first');
      sliderBodyList[newLasttId].classList.add('second');
    }
  }
}
;