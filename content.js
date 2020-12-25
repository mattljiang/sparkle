// const imageNames = ['bing.jpg', 'crab.jpg', 'crab2.jpeg', 'dance.jpeg', 'gardening.jpeg', 'pot1.jpg', 'pot2.jpg', 'stocks.png', 'stocks2.jpeg', 'sweetpotato.jpg', 'tsinghua.jpeg', 'wechat.jpeg'];
const imageNames = ['crime1.jpeg', 'guangchangwu.jpeg', 'meat2.png', 'nationalparks.jpg', 'soccer.jpg', 'crime2.jpg', 'meat1.jpg', 'meat3.jpg', 'rv.png', 'storytelling.jpg']
const imageUrls = imageNames.map((imageName) => chrome.runtime.getURL(`images/${imageName}`));
const frequency = 7;

// add randomizer here, so that you don't always see image #0, #7, #14, etc?

const replaceImages = () => {
  const images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i = i + frequency) {
    // choose a random image, but it will not change at each setInterval call
    const index = i % imageUrls.length;
    const url = imageUrls[index];
    images[i].setAttribute('src', url);
  }
}

// constantly replace images that lazy load
setInterval(replaceImages, 100)