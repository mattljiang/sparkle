// select all img elements
// replace 1 in every 7 with user's image
// image.setAttribute('src', 'https://static.scientificamerican.com/sciam/cache/file/AB921605-B94F-4D2A-A1798DD43488550D_source.jpg');
const url = chrome.runtime.getURL('images/starnosedmole.jpg');

const replaceImages = () => {
  const images = document.querySelectorAll('img');
  const image = images[2];
  console.log(image);
  console.log(image.attributes);
  for (attribute of image.attributes){
    // console.log(attribute.name);
    // if (attribute.name !== 'class' && attribute.name !== 'alt' && attribute.name !== 'id') image.removeAttribute(attribute.name);
    image.removeAttribute(attribute.name);
  }
  console.log(image.dataset);
  for (dataAttribute in image.dataset){
    console.log(dataAttribute);
    image.removeAttribute(`data-${dataAttribute.name}`);
  }
  // image.removeAttribute('class');
  console.log(image);
  console.log(image.attributes);
  // images.forEach((image) => {
  //   // image.removeAttribute('srcset');
  //   image.setAttribute('src', url);
  // })
}

setTimeout(replaceImages, 1000)


// replace 1 in every 7 with user's random image