console.log('whatup council');

// select all img elements
const countImages = () => {
  let images = document.querySelectorAll('img');
  // const image = images[0]
  console.log(images);;
}
// replace 1 in every 7 with user's image
// image.setAttribute('src', 'https://static.scientificamerican.com/sciam/cache/file/AB921605-B94F-4D2A-A1798DD43488550D_source.jpg');
// console.log(image);
// countImages();
countImages();

document.onreadystatechange = function () {
  switch (document.readyState) {
    case 'loading':
      console.log('loading');
      break;
    case 'interactive':
      console.log('interactive');
      break;
    case 'complete':
      console.log('complete');
      countImages();
      break;
  }
}

// replace 1 in every 7 with user's random image