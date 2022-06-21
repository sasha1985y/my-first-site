const createCustomPopup = (place) => {
  const templateContent = document.querySelector('#card')
  .content
  .querySelector('.popup').cloneNode(true);

  const popupPhoto = templateContent.querySelector('.popup__image');
  if(place.image) {
    popupPhoto.src = place.image[0];
  }

  const popupButtons = templateContent.querySelector('.popup__buttons');
  if(place.image.length > 1) {
    popupButtons.classList.remove('hidden');
  }
  
  const popupCounterPhotos = popupButtons.querySelector('.popup__counter');
  const popupCounterArray = popupButtons.querySelector('.popup__counter--array');
  popupCounterPhotos.textContent = `${0}`;
  popupCounterArray.textContent = `${place.image.length - 1}`;
  const popupGoButton = popupButtons.querySelector('.go');
  const popupBackButton = popupButtons.querySelector('.back');
  let i, j;

  const getMoveGo = () => {
    popupGoButton.addEventListener('click', () => {
      i = Number.parseInt(popupCounterPhotos.textContent, 10);
      i++;
      if (i === place.image.length - 1 && !place.image.length === 2 ) {
        popupGoButton.classList.add('hidden');
      } else if (i === 1 && popupBackButton.classList.contains('hidden')) {
        popupBackButton.classList.remove('hidden');
      }
      popupCounterPhotos.textContent = `${i}`;
      popupPhoto.src = place.image[i];
    })
  };
  
  getMoveGo();

  const getMoveBack = () => {
    popupBackButton.addEventListener('click', () => {
      j = Number.parseInt(popupCounterPhotos.textContent, 10);
      j--;
      if (j > 1 && popupBackButton.classList.contains('hidden')) {
        popupBackButton.classList.remove('hidden');
      } else if (j < 1) {
        popupBackButton.classList.add('hidden');
      } else if (j < place.image.length - 1 && popupGoButton.classList.contains('hidden')) {
        popupGoButton.classList.remove('hidden');
      }
      popupCounterPhotos.textContent = `${j}`;
      popupPhoto.src = place.image[j]; 
    })
  };

  getMoveBack();

  const popupTitle = templateContent.querySelector('.popup__title');
  if(place.title) {
    popupTitle.textContent = place.title;
  } else {
    popupTitle.remove();
  };

  const popupLocation = templateContent.querySelector('.popup__location');
  if(place.location) {
    popupLocation.textContent = place.location;
  } else {
    popupLocation.remove();
  };

  const popupCoordinates = templateContent.querySelector('.popup__address');
  if(place.coordinates.lat && place.coordinates.lng) {
    popupCoordinates.textContent = `${place.coordinates.lat}, ${place.coordinates.lng}`;
  } else {
    popupCoordinates.remove();
  };

  const popupDescription = templateContent.querySelector('.popup__description');
  if(place.description) {
    popupDescription.textContent = place.description;
  } else {
    popupDescription.remove();
  };

  const popupAvatar = templateContent.querySelector('.popup__avatar');
  if(place.avatar) {
    popupAvatar.src = place.avatar;
  } else {
    popupAvatar.remove();
  };

  return templateContent;
};

export {createCustomPopup};