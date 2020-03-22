
const tileSize = 40;
const imageSize = 50;
const screenHeight = getHeight()
const screenWidth = getWidth();

function getWidth() {
    let width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )
    if (width < 1000) {
      return 1000
    }
    if (width > 1500) {
      return 1500
    }
    return width
  }
  
  function getHeight() {
    let height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    if (height < 800) {
      return 800
    }
    if (height > 1000) {
      return 1000
    }
    return height
  }


export {tileSize, imageSize, screenHeight, screenWidth}