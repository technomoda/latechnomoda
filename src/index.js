const $ = require('jquery');
require('./static/sass/aqua.scss');
require('./static/sass/styles.scss');
require('./static/sass/case-study.scss');
require('./static/sass/bio.scss');
require('./static/sass/bandshite.scss');
require('./static/sass/beverly.scss');
require('./static/sass/rosie.scss');
//require('./static/sass/work.scss');

console.log('hi this site was made with ❤︎ by @daliafyi and @0XDEAD37 on twitter');


$('.subtitle').on('click', function(){
  console.log("you clicked on subtitle");
})
