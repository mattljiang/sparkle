const momImageNames = ['bing.jpg', 'crab.jpg', 'crab2.jpeg', 'dance.jpeg', 'gardening.jpeg', 'pot1.jpg', 'pot2.jpg', 'stocks.png', 'stocks2.jpeg', 'sweetpotato.jpg', 'tsinghua.jpeg', 'wechat.jpeg'];;
const momImageUrls = momImageNames.map((imageName) => chrome.runtime.getURL(`images-mom/${imageName}`));

const dadImageNames = ['crime1.jpeg', 'guangchangwu.jpeg', 'meat2.png', 'nationalparks.jpg', 'soccer.jpg', 'crime2.jpg', 'meat1.jpg', 'meat3.jpg', 'rv.png', 'storytelling.jpg']
const dadImageUrls = dadImageNames.map((imageName) => chrome.runtime.getURL(`images-dad/${imageName}`));

chrome.storage.sync.get(['identity'], (result) => {
  const identity = result.identity;

  // choose pictures based on identity
  let imageUrls;
  if (identity === 'mom') {
    imageUrls = momImageUrls;
  } else {
    imageUrls = dadImageUrls;
  }
  
  const frequency = Math.round(Math.random() + 2);
  
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
});