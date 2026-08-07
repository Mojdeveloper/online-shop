sliderShow = async () => {

    let slidesBox = document.getElementById('slides-box')
    const sliderAPI = new SliderAPI
    const data = await sliderAPI.getAll()
    for (let index = 0; index < data.length; index++) {
        slidesBox.innerHTML +=
            ` 
                <div class="slide">
                    <p class="title"><a href="${data[index].link}">${data[index].title}<br />${data[index].subTitle}</a></p>
                    <img src=${data[index].image} alt="image" title="image">
                </div>
            `

    }
    $('.slideshow').slideshowPlugin({
        effect: 'sliding',
        slideSpeed: 800,
        ratio: "keep",
    });

}