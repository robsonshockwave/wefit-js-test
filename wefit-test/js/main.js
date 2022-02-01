// ~~ MENU ~~
const changeMenuHorizontal = (btnGroupVertical) => {
  document.querySelector(btnGroupVertical).style.maxWidth = '525px';
  document.querySelector(btnGroupVertical).style.display = 'flex';
  document.querySelector(btnGroupVertical).style.alignItems = 'center';
  document.querySelector(btnGroupVertical).style.flexDirection = 'row';
  document.querySelector(btnGroupVertical).style.gap = '4px';

  const valueMenuOptions = document.querySelectorAll('.btn-secondary');

  valueMenuOptions.forEach((element) => {
    element.style.borderRadius = '4px';
    element.style.width = 'auto';
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
