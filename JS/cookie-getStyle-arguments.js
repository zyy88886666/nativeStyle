/*
* arguments  可变参  不定参
 */

alert( show(1,3,4,432,43,5,32,234,2) );   //756 

function show(){
   
    var sum = 0;
	
	for( var i =0 ; i <arguments.length ; i++){
		sum+= arguments[i];
	}
	
	return sum;
} 



/**
 * obj.currentStyle[attr]            取得非行间样式
 * getComputedStyle(obj,false)[attr] 取得非行间样式
 */

//取行间样式
function css(oDiv , name , value ){
	
	if(arguments.length ==2){

		return obj.style[name]; 

	}else{

		return obj.style[name] == value;

	}
}


//取非行间样式
function getStyle( oDiv, name ){
	
	if(oDiv.currentStyle){

		return oDiv.currentStyle[name];

	}else{

		reutrn getComputedStyle(oDiv,false)[name];

	}
}



/*
 @setCookie() :创建和获取cookie
 @getCookie():读取cookie
 @checkCookie():判断cookie是否存在
 */
 */
// 函数中的参数分别为 cookie 的名称、值以及过期天数
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
setCookie('name','zzyn',1); // cookie过期时间为1天。

// 如果要设置过期时间以秒为单位
function setCookie(c_name,value,expireseconds){
    var exdate=new Date();
    exdate.setTime(exdate.getTime()+expireseconds * 1000);
    document.cookie=c_name+ "=" +escape(value)+
    ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())
}
setCookie('name','zzyn',3600);  //cookie过期时间为一个小时


// 函数中的参数为 要获取的cookie键的名称。
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){ 
                c_end=document.cookie.length;
            }

            return unescape(document.cookie.substring(c_start,c_end));
        }
     }

    return "";
}
var uname= getCookie('name');
console.log(uname);



// 函数中的参数为，要判断的cookie名称
 function checkCookie(c_name){
    username=getCookie(c_name);
    if (username!=null && username!=""){
        // 如果cookie值存在，执行下面的操作。
        alert('Welcome again '+username+'!');
    }else{
        username=prompt('Please enter your name:',"");
        if (username!=null && username!=""){
            //如果cookie不存在，执行下面的操作。
            setCookie('username',username,365)
        }   
    }
}