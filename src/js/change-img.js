const img = document.getElementById('image');
let currentIndex = 0;
function changeImgUrl(urlList) {
    img.src = urlList[currentIndex];
    currentIndex = (currentIndex + 1) % urlList.length;
};

export default changeImgUrl;