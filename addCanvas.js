javascript:function hello(a){a=document.getElementById("image_cvs");var b=document.createElement("canvas"),c=document.getElementById("image-main-area");c.parentElement.insertBefore(b,c);b.width=a.width;b.height=a.height;b.getContext("2d").drawImage(a,0,0)}hello("New user");