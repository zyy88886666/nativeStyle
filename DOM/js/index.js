//增加window加载函数
//当有多个函数需要加载时
function addLoadEvent(func){
    var oldload= window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldload();
            func();
        }
    }
}


//在已有的元素后面插入一个新的元素  由于没有定义方法，所以需要自己写
function insertAfter(newelement,targetelement){
    var parent= targetelement.parentNode;  //获取目标父元素
    if(parent.lastChild==targetelement){
        parent.appendChild(newelement);
    }else{
        parent.insertBefore(newelement,targetelement.nextSibling);
    }
}

function preparePlaceholer(){
    var placeholder= document.createElement("img");
    placeholder.setAttribute("src","images/spaider_man.jpg");
    placeholder.setAttribute("alt","siderman");
    var description1= document.createElement("p");
    var text1=document.createTextNode("11111111111");
    description1.appendChild(text1);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description1,placeholder);
  /*  gallery.parentNode.insertBefore(placehold,gallery);//第一个参数是插入的，第二个参数是目标元素即你想把新的元素插入到哪个元素前面
*/
}

function preparegallery(){
    var gallery = document.getElementById("imagegallery");
    var links= gallery.getElementsByTagName("a");
    var len= links.length;
    var i;
    alert(len);
    for(i=0;i<len;i++){
        links[i].onclick=function(){
            return showPic(this)? false:true;
        };
        links[i].onkeypress=links[i].onclick;
    }
}

function showPic(which){
    var placehold=document.getElementById("placehold");
    var href=which.getAttribute("href");
    placehold.setAttribute("src",href);
    if(document.getElementById("description")){
        var text=which.getAttribute("title")?which.getAttribute("title"):"";
        var description=document.getElementById("description");
        if(  description.childNodes[0].nodeType==3){
            description.firstChild.nodeValue =text;
        }
    }
    return true;
}im

addLoadEvent(preparePlaceholer);
addLoadEvent(preparegallery);

function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName = element.className;
        newClassName+= " ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function styleElementSiblings(tag,theClass){
    if(!document.getElementsByTagName)return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<elems.length;i++){
        elem = elems[i].nextSibling;
        addClass(elem,theClass);
    }
}

addLoadEvent(function(){
    styleElementSiblings("tr","odd");
});

/*
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                addClass(rows[j],"odd");
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}addLoadEvent(stripeTables);*/


function positionMessage(){
    var elem = document.getElementById("message");

    elem.style.position="absolute";
    elem.style.left="600px";
    elem.style.top = "700px";
    movement = setTimeout("moveMessage()",5000);
}
function moveMessage(){
    var elem = document.getElementById("message");
   var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==200&&ypos==100){
        return true;
    }
    if(xpos<200){
        xpos++;
    }
    if(xpos>200){
        xpos--;
    }
    if(ypos<100)
    {
        ypos++;
    }
    if(ypos>100)
    {
        ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    movement = setTimeout("moveMessage()",1000);
}
addLoadEvent(positionMessage);
