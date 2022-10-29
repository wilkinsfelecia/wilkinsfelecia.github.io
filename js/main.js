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

let btn_projects = document.querySelector('.btn-projects'),
   elm_projects = document.querySelector('#projects');

btn_projects.addEventListener('click', function (e) {
   e.preventDefault();
   if (elm_projects.classList.contains('hidden')) {
      elm_projects.classList.remove('hidden');
      scrollToTarget(elm_projects);
   } else {
      elm_projects.classList.add('hidden');
   }
});