const bannerTop = document.querySelector('.banner-top')
let bannerTopTop = document.querySelector('.banner-top-top')
let bannerTitle1 = document.querySelector('.banner-title-bg1')
const bannerMiddle = document.querySelector('.banner-middle')
let bannerMiddleMiddle = document.querySelector('.banner-middle-middle')
let bannerTitle2 = document.querySelector('.banner-title-bg2')
const bannerBottom = document.querySelector('.banner-bottom')
let bannerBottomBottom = document.querySelector('.banner-bottom-bottom')
let bannerTitle3 = document.querySelector('.banner-title-bg3')
bannerTopTop.classList.add('active')
            bannerTitle1.classList.add('active')

bannerTop.addEventListener('click', function(){
    if(bannerMiddleMiddle.classList.contains('active') || bannerBottomBottom.classList.contains('active')){
        bannerMiddleMiddle.classList.remove('active')
        bannerTitle2.classList.remove('active')
        bannerBottomBottom.classList.remove('active')
        bannerTitle3.classList.remove('active')
        bannerTopTop.classList.add('active')
        bannerTitle1.classList.add('active')
    }else{
        if(bannerTopTop.classList.contains('active')){
            bannerTopTop.classList.remove('active')
            bannerTitle1.classList.remove('active')
        }else{
            bannerTopTop.classList.add('active')
            bannerTitle1.classList.add('active')
        }
    }
})
bannerMiddle.addEventListener('click', function(){
    if(bannerBottomBottom.classList.contains('active') || bannerTopTop.classList.contains('active')){
        bannerTopTop.classList.remove('active')
        bannerTitle1.classList.remove('active')
        bannerBottomBottom.classList.remove('active')
        bannerTitle3.classList.remove('active')
        bannerMiddleMiddle.classList.add('active')
        bannerTitle2.classList.add('active')
    }else{
        if(bannerMiddleMiddle.classList.contains('active')){
            bannerMiddleMiddle.classList.remove('active')
            bannerTitle2.classList.remove('active')
        }else{
            bannerMiddleMiddle.classList.add('active')
            bannerTitle2.classList.add('active')
        }
    }
})
bannerBottom.addEventListener('click', function(){
    if(bannerMiddleMiddle.classList.contains('active') || bannerTopTop.classList.contains('active')){
        bannerMiddleMiddle.classList.remove('active')
        bannerTitle3.classList.remove('active')
        bannerTopTop.classList.remove('active')
        bannerTitle1.classList.remove('active')
        bannerBottomBottom.classList.add('active')
        bannerTitle3.classList.add('active')
    }else{
        if(bannerBottomBottom.classList.contains('active')){
            bannerBottomBottom.classList.remove('active')
            bannerTitle3.classList.remove('active')
        }else{
            bannerBottomBottom.classList.add('active')
            bannerTitle3.classList.add('active')
        }
    }
})






