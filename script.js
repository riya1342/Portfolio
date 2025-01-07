
var typed = new Typed(".auto-type",{
      strings:["Web Developer.","Web Designer.","Full Stack Developer."],
      typeSpeed:150,
      backSpeed:150,
      loop:true
})

var html = document.querySelector(".html");
var htmlCcount = 0;
setInterval(() => {
    if(htmlCcount==80){
        clearInterval();
    }else{
        htmlCcount +=1;
        html.innerHTML = htmlCcount + "%";
    }
    
},30);

var css = document.querySelector(".css");
var cssCounter = 0;
setInterval(() => {
    if(cssCounter==75){
        clearInterval();
    }else{
        cssCounter +=1;
        css.innerHTML = cssCounter + "%";
    }
    
},30);

var bootstrap = document.querySelector(".bootstrap");
var bootstrapCounter = 0;
setInterval(() => {
    if(bootstrapCounter==50){
        clearInterval();
    }else{
        bootstrapCounter +=1;
        bootstrap.innerHTML = bootstrapCounter + "%";
    }
    
},45);

var javascript = document.querySelector(".javascript");
var javascriptCounter = 0;
setInterval(() => {
    if(javascriptCounter==60){
        clearInterval();
    }else{
        javascriptCounter +=1;
        javascript.innerHTML = javascriptCounter + "%";
    }
    
},40);

var wordpress = document.querySelector(".wordpress");
var wordpressCounter = 0;
setInterval(() => {
    if(wordpressCounter==60){
        clearInterval();
    }else{
        wordpressCounter +=1;
        wordpress.innerHTML = wordpressCounter + "%";
    }
    
},30);

var php = document.querySelector(".php");
var phpCounter = 0;
setInterval(() => {
    if(phpCounter==50){
        clearInterval();
    }else{
        phpCounter +=1;
        php.innerHTML = phpCounter + "%";
    }
    
},45);

var mysql = document.querySelector(".mysql");
var mysqlCounter = 0;
setInterval(() => {
    if(mysqlCounter==50){
        clearInterval();
    }else{
        mysqlCounter +=1;
        mysql.innerHTML = mysqlCounter + "%";
    }
    
},45);



