import changeImgUrl from "./js/change-img";
const img = document.getElementById('image');

const srcList = ["https://e1.pngegg.com/pngimages/977/544/png-clipart-my-melody-s-sanrio-character-thumbnail.png", "https://e7.pngegg.com/pngimages/608/806/png-clipart-yellow-dog-sticker-illustration-sanrio-%E7%B5%B5%E6%96%87%E5%AD%97-landry-sanrio-text-logo-thumbnail.png", "https://e7.pngegg.com/pngimages/648/709/png-clipart-hello-kitty-badtz-maru-sanrio-desktop-computer-icons-sanrio-cat-like-mammal-carnivoran-thumbnail.png"];

img.addEventListener('click', () => {
    changeImgUrl(srcList)
})
