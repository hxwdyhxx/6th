$(function(){
    $('.link-more').click(function(){
        $('.logo-area').addClass('active');
    });
    $('.mall-logo a').click(function(){
        $('.logo-area').removeClass('active');
    })

/* 
<div class="swiper-slide"> <a href="#"> <img src="./asset/images/slide_01.jpg" alt="SSG 랜더스 통합  우승 기념 쓱세일 (전단)"> </a> </div>
 */


/* *******************메인슬라이드 json 시작***************** */
fetch('asset/data/mainslideData.json')
.then((response) => response.json())
.then((json) => {
  data=json.items;

  let html = '';

  data.forEach(element => {

    html+=`
    <div class="swiper-slide">
      <a href="#">
        <img src="${element.img}" alt="${element.title}">
      </a>
    </div>
    `;
    
  });
  

  $('#slideList').html(html);


  console.log(data);

  mainslide.update();
  

});

/* *******************메인슬라이드 json 끝***************** */


/* *******************관련 json 시작***************** */
  fetch('asset/data/relatedData.json')
  .then((response) => response.json())
  .then((json) => {
    data=json.items;

    let html = '';

    data.forEach(element => {

      html+=`<li class="swiper-slide relatedsite-item">
                <a href="${element.link}" class="link-site">
                    <img src="${element.img}" alt="${element.title}">
                    <span class="site-name">${element.title}</span>
                </a>
            </li>`;
      
    });
    

    $('#relatedList').html(html);


    console.log(data);


    relatedsite.update();

  });

  /* *******************관련 json 끝***************** */


  /* *******************추천 json 시작***************** */

  fetch('asset/data/recommendData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.items;

    let html = '';

    data.forEach(element => {

      html+=`
      <div class="swiper-slide">
        <a href="#" class="wrapper">
          <div class="img-box">
            <img src="${element.img}" alt="${element.alt}">
          </div>
          <div class="text-box">
            <strong class="title">${element.title}</strong>
            <span class="desc">${element.desc}</span>
          </div>
        </a>
    </div>
      `;
      
    });
    $('#recommendList').html(html);


    console.log(data);


  });


/*   */
  /* *******************추천 json 끝***************** */


  /* ******************* 금주 추천 json 시작***************** */
  fetch('asset/data/weeklyData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.items;

    let html = '';

    data.forEach(element => {

      html+=`
      <li class="weekly-item">
        <a href="#">
          <div class="img-box">
            <img src="${element.image}" alt="">
          </div>
          <div class="text-box">
            <strong class="title">${element.sub}</strong>
            <strong class="title">${element.dsc}</strong>
          </div>
        </a>
      </li>
      `;
      
    });
    $('.weekly-list').html(html);


    console.log(data);


  });


  /* ******************* 금주 추천 json 끝***************** */



/* ******************* ssg.tv json 시작 ***************** */
fetch('asset/data/ssgtvData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.items;

    let html = '';

    data.forEach(element => {

      html+=`
      <div class="swiper-slide">
        <div class="wrapper">
          <a href="#" class="img-box">
              <img src="${element.img}" alt="${element.alt}">
          </a>
          <a href="#" class="btn-play">
              <span class="blind">동영상 재생</span>
          </a>
        </div>
        <a href="#" class="desc-wrap">
          <em class="brand">${element.brand}</em>
          <span class="desc">${element.desc}</span>
          <span class="info">${element.info}</span>
        </a>
      </div>
      `;
      
    });
    $('#tvList').html(html);


    console.log(data);


  });

/* ******************* ssg.tv json 끝 ***************** */

/* *******************서비스 json 시작***************** */
fetch('asset/data/recommendData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.services;

    let html = '';

    data.forEach(element => {

      html+=`
      <div class="swiper-slide">
         <a href="#" class="wrapper">
          <div class="img-box">
            <img src="${element.img}" alt="${element.alt}">
          </div>
          <div class="text-box">
            <strong class="title">${element.title}</strong>
            <span class="desc">${element.desc}</span>
          </div>
         </a>
      </div> 
      `;
      
    });
    $('#serviceList').html(html);


    console.log(data);


  });

/* *******************서비스 json 끝***************** */


/* ******************* 이번주 행사 json 시작***************** */
fetch('asset/data/recommendData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.promo;

    let html = '';

    data.forEach(element => {

      html+=`
      <div class="swiper-slide">
         <a href="#" class="wrapper">
          <div class="img-box">
            <img src="${element.img}" alt="${element.alt}">
          </div>
          <div class="text-box">
            <strong class="title">${element.title}</strong>
            <span class="desc">${element.desc}</span>
          </div>
         </a>
      </div> 
      `;
      
    });
    $('#eventsList').html(html);


    console.log(data);


  });

/* ******************* 이번주 행사 json 끝***************** */

/* ******************* blossom json 시작***************** */
fetch('asset/data/recommendData.json')
  .then((response) => response.json())
  .then((json) => {

    data=json.blossom;

    let html = '';

    data.forEach(element => {

      html+=`
      <div class="swiper-slide">
         <a href="#" class="wrapper">
          <div class="img-box">
            <img src="${element.img}" alt="${element.alt}">
          </div>
          <div class="text-box">
            <strong class="title">${element.title}</strong>
            <span class="desc">${element.desc}</span>
          </div>
         </a>
      </div> 
      `;
      
    });
    $('#blossomList').html(html);


    console.log(data);


  });

/* ******************* blossom json 끝***************** */

// slide ///////////////////////////////////////////////////////

  


 const relatedsite = new Swiper(".sc-relatedsite", {
    slidesPerView: 'auto',
    // slidesPerView: 3,
    grid: {
      rows: 2,
    },
    freeMode:true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });


  const mainslide = new Swiper("#mainSlide", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".fraction",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return `<span class="page">${current}</span>/<span class="total">${total}</span>`;
        }
    },
  });

  $('.btn-autoplay').click(function () {
    parentId = $(this).parents('.swiper').attr('id');

    if (parentId == 'mainSlide') {
      if ($(this).hasClass('active')) {
          const slideStart = mainslide.autoplay.start();
      } else {
          const slideStop = mainslide.autoplay.stop();
      }
  }

    if ($(this).hasClass('active')) { //두번클릭
        $(this).removeClass('active').attr('aria-label', '자동재생 정지');
    } else { //첫클릭
        $(this).addClass('active').attr('aria-label', '자동재생 적용');
    }
});

  const adSlide = new Swiper("#adSlide", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    
  });
  const promotionSlide = new Swiper("#promotionSlide", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    
    
  });
  const commonSlide = new Swiper(".commonSlide", {
    slidesPerView: 1.6,
    spaceBetween: 15,
    
    
  });
  const tvSlide = new Swiper("#TVSlide", {
    slidesPerView: 1.6,
    spaceBetween: 15,
    loop:true,
    centeredSlides: true,
    
  });
  // slide ///////////////////////////////////////////////////











}) ///////////// 지우지마세욥 /////////////////////////