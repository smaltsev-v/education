/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// tagsContainer.addEventListener('click', onTargsContainerClick);
// function onTargsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }
//   // currentActiveBtn?.classList.remove('tags__btn--active');
    
//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;
  
//   console.log(selectedTag)
  
// }
const tagsContainer = document.querySelector('.js-tags');
const selectedTag = new Set();

tagsContainer.addEventListener('click', onTargsContainerClick);

function onTargsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  console.log(btn.classList.has('tags__btn--active'));

  btn.target.classList.toggle('tags__btn--active');
  
  selectedTag.add(btn.dataset.value);
  
  console.log(selectedTag);

  // selectedTag.push(evt.target.dataset.value);
  

51^38
}
