var express = require('express');

/* GET home page. */

exports.index = function(req, res) {
    res.render('index', {
        title:'heronglw',
        articles:[{
           _id:1,
           title:'和荣获得省级大奖',
           imgurl:'http://ww3.sinaimg.cn/thumbnail/ecd0e654gw1eorvw7dfruj20dc08cmx8.jpg',
           poster:'make a success company'
        },
        { 
          _id:2,
          title:'heronglw is very perfect',
          imgurl:'http://ww3.sinaimg.cn/thumbnail/ecd0e654gw1eorvw7dfruj20dc08cmx8.jpg'
       },
       { 
          _id:3,
          title:'heronglw is very perfect',
          imgurl:'http://ww3.sinaimg.cn/thumbnail/ecd0e654gw1eorvw7dfruj20dc08cmx8.jpg'
       },

]})
}

exports.detail = function(req, res) {
    console.log('detail')
    res.render('articles',{
         title:'articles',
         article:[
                 {
                   _id:1,
                   title:'heronglw very good',
                   pre:'heronglw get the best company',
                   imgurl:'http://ww3.sinaimg.cn/thumbnail/ecd0e654gw1eorvw7dfruj20dc08cmx8.jpg'
                  },
                  {
                   _id:2,
                   title:'my perfect company',
                   pre:'perfect company',
                   imgurl:'http://ww3.sinaimg.cn/thumbnail/ecd0e654gw1eorvw7dfruj20dc08cmx8.jpg'
                  }]
})
}
