export let currentPage = 'products';

export function setTitle(title) {
  let titleElement = document.getElementById('title');

  titleElement.innerText = title;
}

export function replaceMainContent(newContent) {
  let mainElement = document.getElementById('main-content');

  mainElement.innerHTML = newContent;
}

export function setCurrentPage(cnewPage){
  currentPage = cnewPage;
}

export function getCurrentPage(){
  return currentPage;
}
