// 先等图片都加载完成
// 再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
   * 内容JSON
   */
  var demoContent = [
    {
      demo_link: 'https://tecritmodigital.com.br/2024/07/03/aula-web-001-primeiro-gif-animado/',
      img_link: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF9y2yOovUjcfwfEVllwR1z4ZOiIil7-o8U5ryb09oHPLYdFwx71-pg7RsH3nMkp0ar4zCdnZBPGkEnN4C9F2M6rLJtZimmb9hcwHfx1Bwj2Q-fnfZ1gyarFdKXK29rUbrVK7R8XkesBM/s1600/ODz6_n.gif',
      title: 'Primeiro Gif Animado',
      core_tech: 'Primeiro Gif Animado',
      description: 'Primeiro Gif Animado',
    },
    {
      demo_link: 'https://tecritmodigital.com.br/2024/07/03/aula-web-002-segundo-gif-animado/',
      img_link: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeOfW72sIbzTeVcdXMD1Zdk2ukNr3Rm-3nUBpTRZ-9uFl4vB6eP4m0Rh8wd3BBRn4cF8JKYEpZHsqWiX6VGHvCgV4NQVviJv0CHnedJEXBJDlLxTyX1zzJ8uu_VWX-_CgfYNX-Np2ZTvA/s1600/BlADC7.gif',      
      title: 'Segundo Gif Animado',
      core_tech: 'Segundo Gif Animado',
      description: 'Segundo Gif Animado',
    },
    
  ]

  contentInit(demoContent) //内容初始化
  initGrid()
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  var htmlArr = [];
  for (var i = 0; i < content.length; i++) {
      htmlArr.push('<div class="grid-item">')
      htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
      if(content[i].img_link) {
        htmlArr.push('<img src="'+content[i].img_link+'" style="width: 100%">')
      }
      htmlArr.push('</a>')
      htmlArr.push('<h3 class="demo-title">')
      htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
      htmlArr.push('</h3>')
      if (content[i].core_tech) {
        htmlArr.push('<p>Main tech：'+content[i].core_tech+'</p>')
      }
      htmlArr.push('<p>'+content[i].description)
      if (content[i].code_link) {
        htmlArr.push('<a href="'+content[i].code_link+'"> Source code <i class="fa fa-code" aria-hidden="true"></i></a>')
      }
      htmlArr.push('</p>')
      htmlArr.push('</div>')
  }
  var htmlStr = htmlArr.join('')
  // var htmlStr = ''
  // for (var i = 0; i < content.length; i++) {
  //   htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'

  //   // htmlStr += `
  //   //   <div class="grid-item">
  //   //     <a class="a-img" href="${content[i].demo_link}">
  //   //     <img src="${content[i].img_link}">
  //   // `
  // }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    // percentPosition: true,
    isFitWidth: true,
    gutter: 20
  })

  imagesLoaded(grid).on('progress', throttle(function() {
    // layout Masonry after each image loads
      msnry.layout();
  }, 1600, {
    leading: false,
    trailing: true,
  }));
}

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}