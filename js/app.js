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


// js savolar
//  1
// let n = Number(prompt('N ni kiriting: '));
// let m = Number(prompt('M ni kiriting: '));
// function hisoblash(n,m){
//     if(m%2==0){
//         console.log( n+1+m/2);
//     }else{
//         console.log(-1);
//     }
// }
// hisoblash(n,m);

// 2
// let n = Number(prompt('chipta raqamini kiriting: '));
// function omad(n){
//     let a=0
//     let s1=0
//     let s2=0
//     let b=0
//     for(i=0;i<6;i++){
//         if(i<3){
//             a=(n%10);
//             s1+=a;
//             n=Math.floor(n/10);
//         }else{
//             b=(n%10);
//             s2+=b;
//             n=Math.floor(n/10);
//         }
//     }
//     console.log(s1)
//     console.log(s2)
//     if(s1==s2){
//         console.log('omadli');
//     }else{
//     console.log('omadsiz');
//    }
// }
// omad(n);


// 3
// let n = Number(prompt('n sonini kiriting: '));
// function yigindi(n){
//     let s=0
//     while(n!==0){
//         s+=n%10;
//         n=Math.floor(n/10);
//     }
//     console.log(s)
// }
// yigindi(n);







