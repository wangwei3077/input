var check = document.getElementById("check");
var inputs = document.getElementsByTagName("input");
var selects = document.getElementsByTagName("select");
var mm = document.getElementById("mm");
var qm = document.getElementById("qm");
var years = document.getElementById("years");
// console.log(years);
var months = document.getElementById("months");
var days = document.getElementById("days");
/*功能1：禁用与不禁用*/
//一开始全部禁用,第一个不禁用
for (var i = 1; i < inputs.length; i++) {
    inputs[i].disabled = true;
}
for (var k = 0; k < selects.length; k++) {
    selects[k].disabled = true;
}
check.onclick = function () {
//验证码
//             function () {
//
//             }
    var x1 = parseInt(Math.random() * 10);
    var x2 = parseInt(Math.random() * 10);
    var symbol = parseInt(Math.random() * 4);
    var result = null;
    var str = "";

    // console.log(symbol);
    switch (symbol) {
        case 0:
            result = x1 + x2;
            str = x1 + "+" + x2;
            break;
        case 1:
            result = x1 + x2;
            str = x1 + "+" + x2;
            break;
        case 2:
            result = x1 - x2;
            str = x1 + "-" + x2;
            break;
        case 3:
            result = x1 * x2;
            str = x1 + "*" + x2;
            break;
    }
    // console.log(result);
    // console.log(str);
    var auth1 = document.getElementById("auth1");
    auth1.innerText = str;
    var judge = document.getElementById("jd");
    yzm.onkeydown = function (even) {
        if (even.keyCode == 13) {
            if (yzm.value != result) {
                yzm.disabled = true;
                judge.className = judge.className.replace("daiding", "cha");
                judge.className = judge.className.replace("gou", "cha");
            }
            else {
                judge.className = judge.className.replace("daiding", "gou");
                judge.className = judge.className.replace("cha", "gou");
            }
        }
    };
    var sx = document.getElementById("sx");
    sx.onclick = function () {
        if (check.checked == false) {
            return;
        }
        x1 = parseInt(Math.random() * 10);
        x2 = parseInt(Math.random() * 10);
        symbol = parseInt(Math.random() * 4);
        result = null;
        str = "";
        // console.log(symbol);
        switch (symbol) {
            case 0:
                result = x1 + x2;
                str = x1 + "+" + x2;
                break;
            case 1:
                result = x1 + x2;
                str = x1 + "+" + x2;
                break;
            case 2:
                result = x1 - x2;
                str = x1 + "-" + x2;
                break;
            case 3:
                result = x1 * x2;
                str = x1 + "*" + x2;
                break;
        }
        // console.log(result);
        // console.log(str);
        auth1.innerText = str;
        if (yzm.disabled == true) {
            yzm.disabled = false;
        }
    };
    if (check.checked == false) {
        for (var i = 1; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        for (var k = 0; k < selects.length; k++) {
            selects[k].disabled = true;
        }
//不同意时，清空所有内容
        var qk = document.getElementById("qk");
        mm.value = "";
        qm.value = "";
        m.innerHTML = "";
        q.innerHTML = "";
        yzm.value = "";
        judge.className = judge.className.replace("gou", "daiding");
        judge.className = judge.className.replace("cha", "daiding");
        auth1.innerText = "";
        nc.nextElementSibling.innerHTML="";
        yx.value="";
        yx.nextElementSibling.innerHTML="";
        nc.value="";
//清除计时器
        years.innerHTML = "";
        months.innerHTML = "";
        days.innerHTML = "";
        if (timer) {
            clearTimeout(timer);
        }
    } else if (check.checked == true) {
        for (var j = 1; j < inputs.length; j++) {
            inputs[j].disabled = false;
        }
        for (var k = 0; k < selects.length; k++) {
            selects[k].disabled = false;
        }
        mm.value = "请输入密码";
        qm.value = "请确认密码";
        nc.nextElementSibling.innerHTML="请输入昵称（必填项）";
        yx.nextElementSibling.innerHTML="必填项";
//出生年月
        var timer = setTimeout(function getnowyear() {
             var now = new Date();
             var nowyear = now.getFullYear();
             var month = now.getMonth();
            month++;
            // console.log(nowyear);
            // console.log(month);
 //年
            for (var i = nowyear - 28; i < nowyear - 18; i++) {
                //console.log(years.);
                if (years.children[9]) {
                    return;
                }
                var option1 = document.createElement("option");
                // console.log(option1);
                option1.innerText = i;
                years.appendChild(option1);
            }
            var option1s=years.getElementsByTagName("option");
            var selectyear=null;
            // console.log(option1s.length);
            years.onblur=function () {
                for(var yy=0;yy<option1s.length; yy++ ) {
                    if(option1s[yy].selected==true){
                        selectyear= years.children[years.selectedIndex].innerHTML;
                        console.log(selectyear);
                    }
                }

            }
//月
            var selectmonth=null;
            for (var j = 1; j <= 12; j++) {
                if (months.children[11]) {
                    return;
                }
                var option2 = document.createElement("option");
                option2.innerText = j;
                months.appendChild(option2);
            }
            var day=null;
           months.onblur=function () {
                for(var mm=0;mm<option1s.length; mm++ ) {
                    if(option1s[mm].selected==true){
                        selectmonth= months.children[months.selectedIndex].innerHTML;
                        console.log(selectmonth);
                    }
                }
                 day = getdays(selectyear, selectmonth);
                console.log(day);
                    // var dayschi=days.getElementsByTagName("option");
                    // for(var dd=0;dd<dayschi.length;dd++){
                    //     dayschi[dd].innerHTML="";
                    // }
                    console.log(days);
                    days.innerHTML="";
                   for (var k = 1; k <= day; k++) {
                       var option3 = document.createElement("option");
                       option3.innerText = k;
                       days.appendChild(option3);
                   }
            }
//日
            function getdays(selectyear, selectmonth) {
                arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if ((selectyear % 4 == 0 && selectyear % 100 != 0) || selectyear % 400 == 0) {
                    arr[1] = 29;
                }
                return arr[selectmonth - 1];
            }
        }, 1);
    }
};
/*功能1结束*/
/*功能2：昵称为2-16个汉字*/
//昵称
var nc=document.getElementById("nc");
//console.log( re.test("中二"));//如若返回true,那么就是中文.
nc.onkeyup=function () {
    if(/^[\u4e00-\u9fa5]{2,6}$/.test(nc.value)){
        // alert("是中文");
        nc.nextElementSibling.innerHTML="";
    }else{
        nc.nextElementSibling.innerHTML="长度2-6位的中文";
    }
    if(!nc.value){
        nc.nextElementSibling.innerHTML="请输入昵称";
    }
};
nc.onfocus=function () {
    if(nc.value==""){
        nc.nextElementSibling.innerHTML="请输入昵称";
    }
}
/*功能2结束*/
/*功能3匹配邮箱*/
var yx=document.getElementById("yx");
 yx.onkeyup=function () {
 // ^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
   if(/^[A-Za-z][A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(yx.value)) {
     this.nextElementSibling.innerHTML="邮箱通过";
   }else{
       this.nextElementSibling.innerHTML="6-10位,首字母英文,仅1@,有域名";
   }
}
/*功能4：密码长度8-12位，只能是英文字母下划线，至少一个大写字母一个小写字母一个数字，确认密码与密码一致*/
//功能三待修改-_-|||
//密码长度
var m = document.getElementById("m");
mm.onfocus = function () {
    if (mm.value == "请输入密码") {
        mm.value = "";
    }
}
mm.onblur = function () {
    if (mm.value == "") {
        mm.value = "请输入密码";
        m.innerHTML = "";
    }
}
mm.onkeyup = function () {
    if (mm.value.length == 0) {
        mm.style.background = "";
        m.style.color = "black";
        m.innerHTML = "请输入密码！";
    } else {
        if (mm.value.length < 8 || mm.value.length > 12) {
            m.innerHTML = "密码长度为8-12位！";
            m.style.color = "red";
        } else {
            mm.style.background = "";
            m.innerHTML = "密码通过";
            m.style.color = "green";
        }
    }
    if (mm.value == qm.value) {
        q.innerHTML = "密码一致";
        q.style.color = "green";
    }
    if (qm.value !== mm.value && qm.value != "请确认密码") {
        q.innerHTML = "密码不一致";
        q.style.color = "red";
    }
}
//确认密码
qm.onkeyup = function () {
    if (qm.value == mm.value) {
        q.innerHTML = "密码一致";
        q.style.color = "green";
    } else {
        q.innerHTML = "密码不一致";
        q.style.color = "red";
    }
    if (qm.value == "") {
        q.innerHTML = "请输入确认密码";
        q.style.color = "black";
    }
}
qm.onfocus = function () {
    if (qm.value == "请确认密码") {
        qm.value = "";
        //qm.type="password";
    }
}
qm.onblur = function () {
    if (qm.value == "") {
        qm.value = "请确认密码";
        q.innerHTML = "";
        // qm.type = "text";
    }
}








