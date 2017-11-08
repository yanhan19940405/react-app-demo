String.prototype.startWith=function(str){ 
if(str==null||str==""||this.length==0||str.length>this.length) 
return false; 
if(this.substr(0,str.length)==str) 
return true; 
else 
return false; 
return true; 
}; 


/** 
* 扩展contains方法 
* @param item 
* @return 
*/ 
Array.prototype.contains = function(item){ 
return RegExp("\\b"+item+"\\b").test(this); 
}; 
