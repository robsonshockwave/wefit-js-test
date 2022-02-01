// ~~ MENU ~~
const changeMenuHorizontal = (btnGroupVertical) => {
  document.querySelector(btnGroupVertical).style.maxWidth = '555px';
  document.querySelector(btnGroupVertical).style.display = 'flex';
  document.querySelector(btnGroupVertical).style.alignItems = 'center';
  document.querySelector(btnGroupVertical).style.flexDirection = 'row';
  document.querySelector(btnGroupVertical).style.gap = '4px';

  const valueMenuOptions = document.querySelectorAll('.btn-secondary');

  valueMenuOptions.forEach((element) => {
    element.style.borderRadius = '4px';
    element.style.width = 'fit-content';
  });
};

changeMenuHorizontal('.btn-group-vertical');

// ~~ HEADER ~~
const changeHeaderBox = (btnHeader, jumbotronHeader) => {
  document.querySelector(btnHeader).style.backgroundColor = '#28a745';
  document.querySelector(btnHeader).style.border = 'none';
  document.querySelector(jumbotronHeader).style.textAlign = 'end';
  document.querySelector(jumbotronHeader).style.backgroundColor = '#6c757d';
  document.querySelector(jumbotronHeader).style.color = '#ffffff';
};

changeHeaderBox('.btn-primary', '.jumbotron');

// ~~ CARDS ~~
const changeCards = () => {
  const allCards = document.querySelectorAll('.card');
  const allCardsTitles = document.querySelectorAll('.card-title');

  allCardsTitles.forEach((title) => {
    const nearCard = title.closest('div.card');
    nearCard.dataset['title'] = title.textContent;
  });

  const titleAnimal = document.querySelector('[data-title="Animais"] .btn');
  titleAnimal.classList.remove('btn-primary');
  titleAnimal.classList.add('btn-success');

  const putLater = allCards[1].offsetParent.parentElement;
  putLater.insertBefore(
    allCards[2].offsetParent,
    allCards[1].offsetParent.nextSibling
  );

  const putBefore = allCards[0].offsetParent.parentElement;
  putBefore.insertBefore(allCards[3].offsetParent, allCards[0].offsetParent);
};

changeCards();

// ~~ LIST ~~
const addListItem = (text, active) => {
  let listGroup = document.querySelector('.list-group');
  let li = document.createElement('li');
  let textItem = document.createTextNode(text);

  li.appendChild(textItem);
  li.classList.add('list-group-item');

  if (active) li.classList.add(active);

  listGroup.appendChild(li);
};

const changeList = () => {
  let itemsGroupList = document.querySelectorAll('.list-group-item');
  itemsGroupList[0].classList.remove('active');

  addListItem('Quarto item', 'active');
  addListItem('Quinto item');
};

changeList();
