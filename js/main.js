"use strict";
const scrollToTarget = (elem) => {
   let offset, elemPos, offsetPos;

   offset = 50;
   elemPos = elem.getBoundingClientRect().top;
   offsetPos = elemPos + window.scrollY + offset;

   window.scrollTo({
      top: offsetPos,
      behavior: 'smooth'
   });
}

const btn_projects = document.querySelector('.btn-projects'),
   elm_projects = document.querySelector('#projects');


let hash = window.location.hash.substring(1);

if (hash == 'projects') {
   if (elm_projects.classList.contains('hidden')) {
      elm_projects.classList.remove('hidden');
      scrollToTarget(elm_projects);
   }
}

btn_projects.addEventListener('click', function () {
   elm_projects.classList.remove('hidden');
   scrollToTarget(elm_projects);
   btn_scroll_to_top.classList.remove('hidden');
});

const btn_scroll_to_top = document.querySelector('.scroll-to-top');

btn_scroll_to_top.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });

   window.location.hash = "";
});

const elmAbout = document.querySelector('.about');

const iOptions = {
   root: null,
   threshold: .8,
};

const isIntersecting = element => {
   element.forEach(elm => {
      if (elm.isIntersecting) {
         btn_scroll_to_top.classList.add('hidden');
      } else {
         btn_scroll_to_top.classList.remove('hidden');
      }
   });
}

const iObserver = new IntersectionObserver(isIntersecting, iOptions);
iObserver.observe(elmAbout);