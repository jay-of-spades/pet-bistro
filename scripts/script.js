let menuButton = document.querySelector('.menuButton');
let nav = document.querySelector('#nav');
let navUl = document.querySelector('#nav ul');
let mailingList = document.querySelector('#mailing-list');
let btnMail = document.querySelector('.btn-mail');

menuButton.addEventListener('click', toggleMenu);
navUl.addEventListener('click', toggleMenu);
document.body.addEventListener('click', handleBodyClick);

function toggleMenu(e) {
  nav.classList.toggle('menuVerborgen');
  navUl.classList.toggle('bringDown');
  if (!nav.classList.contains('menuVerborgen')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function handleBodyClick(e) {
  if (
    !nav.classList.contains('menuVerborgen') &&
    e.target !== nav &&
    e.target !== navUl &&
    e.target !== menuButton
  ) {
    toggleMenu();
  } else {
    return;
  }
}

btnMail.addEventListener('mouseover', function () {
  mailingList.style.backgroundColor = 'var(--secondary-bg-color-75)';
});

btnMail.addEventListener('mouseout', function () {
  mailingList.style.backgroundColor = '';
});

function changeBorderColor(isHover) {
  var inputElements = document.querySelectorAll(
    "select, input[type='email'], input[type='text'], textarea"
  );
  var borderColor = isHover
    ? 'var(--accent-color)'
    : 'var(--secondary-bg-color)';
  inputElements.forEach(function (element) {
    element.style.borderColor = borderColor;
  });
}
