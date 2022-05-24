function animateSlider(sliderImages, currentImage){
    sliderImages.animate({
        left: currentImage === 1 ? 0 : `-${(currentImage - 1) * 100}%`
    }, 1000, "swing", () => {})
}

let currentImage = 1;

setInterval(() => {
    const sliderImages = $('.slider-image')

    if(currentImage === sliderImages.length){
        currentImage = 1;
    } else{
        currentImage++;
    }
    // JSON Java Script Object Notation
    sliderImages.animate({
        left: currentImage === 1 ? 0 : `-=100%`
    }, 1500, "swing", () => {
    console.log("Animation finsished")
})
}, 3000)

$("#previous").on("click", () => {
    const sliderImages = $('.slider-image')
    console.log(sliderImages)

    if(currentImage === 1){
        currentImage = sliderImages.length;
    } else{
        currentImage--;
    }
    animateSlider(sliderImages, currentImage)
})

$("#next").on("click", () => {
    const sliderImages = $('.slider-image')

    if(currentImage === sliderImages.length){
        currentImage = 1;
    } else{
        currentImage++;
    }
    animateSlider(sliderImages, currentImage)
})