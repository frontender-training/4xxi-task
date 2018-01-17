var closePromo = document.querySelector('.app-promo__close');
var promoBlock = document.querySelector('.app-promo');
closePromo.addEventListener("click", closePromoBlock);

function closePromoBlock (evt) {
  evt.preventDefault();
  promoBlock.classList.add('hidden');
}

// Sharing
var overlay = document.querySelector('.overlay');
var shareWindow = document.querySelector('.share-popup');
var btnClosePopup = document.querySelector('.share-popup__close');
var shareBtn = document.querySelector('.sharing-buttons__link--share');
var shareIcon = document.querySelectorAll('.sharing__link--share');

btnClosePopup.addEventListener("click", closePopup);
shareBtn.addEventListener("click", openPopup);

for (var i = 0; i < shareIcon.length; i++) {
    shareIcon[i].addEventListener("click", openPopup);
}

function openPopup (evt) {
  evt.preventDefault();
  overlay.classList.remove('hidden');
  shareWindow.classList.remove('hidden');
  // chekedRadio.focus();
}

function closePopup (evt) {
  evt.preventDefault();
  overlay.classList.add('hidden');
  shareWindow.classList.add('hidden');
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    overlay.classList.add('hidden');
    shareWindow.classList.add('hidden');
  }
});
