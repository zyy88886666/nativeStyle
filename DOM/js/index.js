
//图片显示函数
function showPic(whichPic){
    var placeholder = document.getElementById("placeholder"); //占位图片 
    var source = whichPic.getAttribute("href");   //源图片链接
    placeholder.setAttribute("src",source);  //图片替换

    var description = document.getElementById("description");  
    var text = whichPic.getAttribute('title')?  whichPic.getAttribute('title') :" ";   //源图片描述
    description.childNodes[0].nodeValue = text;   //描述替换
    
    return false;
    // var body = document.body  ;// var body = document.getElementsByTagName("body")[0]  获得body对象里面的所有内容
    //var element = document.body.childNodes;   //获得标签节点
    //console.log( element );
}
//点击加载图片
function gallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(i=0; i<links.length; i++ ){
        links[i].onclick = function() {
           return  showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}
addLoad( gallery );


window.onload=function ()
{
    var oUl=document.getElementById('ul1');
    
    //IE6-8
    //alert(oUl.childNodes.length);
    for(var i=0;i<oUl.childNodes.length;i++)
    {
        //nodeType==3   ->  文本节点
        //nodeType==1   ->  元素节点
        //alert(oUl.childNodes[i].nodeType);
        if(oUl.childNodes[i].nodeType==1)  
        {
            oUl.childNodes[i].style.background='red';  //子节点
        }
    }
    alert(oUl.children.length);   //子节点

    //IE6-8
    //oUl.firstChild.style.background='red'; 获取第一个孩子
    //高级浏览器
    //oUl.firstElementChild.style.background='red';
    if(oUl.firstElementChild)
    {
        oUl.firstElementChild.style.background='red';
    }
    else
    {
        oUl.firstChild.style.background='red';
    }
    alert(oUl.parentNode);  // 父节点
};




//脚本库

//window加载多个函数
function addLoad(func){
    var oldload = window.onload;
    if(typeof window.onload != "function" ){
        window.onload = func ;
    }else{
        window.onload = function() {
            oldload();
            func();
        }
    }
}

//在元素后面添加子元素
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if( parent.lastChild==targetElement ){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSilbing);
    }
}
