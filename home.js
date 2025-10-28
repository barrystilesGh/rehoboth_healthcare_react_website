(function () {
  "use strict";

  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (evt) => {
    evt.preventDefault();
    // to home or top of page
    const reset = Math.ceil(-window.pageYOffset);
    window.scrollBy({ top: reset, left: 0, behavior: "smooth" })
  })


  // slider styles

  const wrapper = document.querySelector(".slider");
  const slideWrapper = document.querySelector('.slide-wrapper');
  const slideItem = document.querySelectorAll('.slideItem');
  const slideItemLen = slideItem.length;
  const wrapperWidth = `${window.innerWidth
    }`;


  const widthofSlideWrapper = `${slideItemLen * wrapperWidth
    }vw`;
  slideWrapper.style.width = widthofSlideWrapper;


  // slide timer
  let counter = 0;
  let startTimer;

  const startRotator = () => {
    counter++;
    if (counter === slideItemLen) {

      counter = 0;
    }

    slideWrapper.style.transform = `translateX(${-100 * counter}vw)`;

    // // get content of cta
    // const callToAction = document.querySelectorAll('.cta');
  }


  slideItem.forEach((item) => {

    item.addEventListener('mouseover', (evt) => {
      const cta = item.parentNode.querySelector('.cta');

      startTimer = setInterval(startRotator, 10000);
    })
  })

  slideItem.forEach((item) => {

    item.addEventListener('mouseout', () => {
      clearInterval(startTimer);
    });
  })

  // making the tabs work
  const allTabs = document.querySelectorAll('#tabs >ul >li a');

  allTabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      // get target id
      const targetId = evt.target.getAttribute('href');

      // use id to get it corressponding content
      const targetContent = document.querySelector(targetId);

      for (let tabs of allTabs) {
        tabs.removeAttribute('class')
      }
      evt.target.setAttribute('class', 'visibleBtn');
      // get the old displayed content
      const oldContent = document.querySelector('.visible');
      oldContent.className = `hidden`

      targetContent.setAttribute('class', 'visible')
    })
  })































}()) 