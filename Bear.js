var Bear = {
    Init : function(){
        Test.On()
        SysFunctions.DeviceInit()
    }
}

var ContentManager = {
    NewNode: function(TagName){
        return document.createElement(TagName)
    },
    AppendNode: function(Parent, Child, Chosendom){
        if(Chosendom == null){
            Parent.appendChild(Child)
        }
        else{

        }
    },
    ListChildren: function(Parent){
        return Parent.children
    },
    DropChild: function(Parent, Child){
        Parent.removeChild(Child)
    },
    DropAllChild: function(Parent){ 
        var ParentNode = Parent; 
        while(ParentNode.hasChildNodes())
        { 
            ParentNode.removeChild(ParentNode.firstChild); 
        } 
    },
    DropSelf: function(Child){
        Child.parentNode.removeChild(Child)
    },
}
var cm = ContentManager


var BehaviorManager = {
    
}
var bm = BehaviorManager


var UtilityFunctions = {
    ID : function(NodeName){
        return document.getElementById(NodeName)
    },
    ForEach: function(ParaList, Func){
        for(var Counter=0; Counter<ParaList.length; Counter++){
            Func(ParaList[Counter])
        }
    }
}
var uf = UtilityFunctions


var SysFunctions = {
    AppendCSS : function(path){
        if(!path || path.length === 0){
            console.log('Add Style File Error: File Does Not Exist!')
            return
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    AppendScript : function(path){
        if(!path || path.length === 0){
            console.log('Add Script File Error: File Does Not Exist!')
            return
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    },
    DeviceInit: function(){
        var userAgentInfo = navigator.userAgent;
        if (userAgentInfo.indexOf('Android') > -1) {
            BearPara.ClientAndroid = 1
            BearPara.ClientMobile = 1
        } 
        else if (userAgentInfo.indexOf('iPhone') > -1) {
            BearPara.ClientIOS = 1
            BearPara.ClientMobile = 1
        } 
        else if (userAgentInfo.indexOf('Linux') > -1) {
            BearPara.ClientLinux = 1
            BearPara.ClientDesktop = 1
        } 
        else if(userAgentInfo.toLowerCase().indexOf('micromessenger') != -1) { 
            BearPara.ClientWECHAT = 1
            BearPara.ClientDesktop = 1
        }
        else if (/macintosh|mac os x/i.test(navigator.userAgent)){
            BearPara.ClientMAC = 1
            BearPara.ClientDesktop = 1
        }
        else{
            BearPara.ClientPC = 1
            BearPara.ClientDesktop = 1
        }
    },
    GetScrollTop : function(){ 
        var scroll_top = 0; 
        if (document.documentElement && document.documentElement.scrollTop) { 
            scroll_top = document.documentElement.scrollTop; 
        } 
        else if (document.body) { 
            scroll_top = document.body.scrollTop; 
        } 
        return scroll_top; 
    },
}
var sf = SysFunctions


var Test = {
    On : function(){
        window['test'] = []
        window['body'] = document.body
    },
    Off : function(){

    }
}
var t = Test


var BearPara = {
    MouseX              : -1,
    MouseY              : -1,
    MouseX_Offset       : 0,
    MouseY_Offset       : 0,

    Scroll_Top          : -1,
    
    ClientPC            : 0,
    ClientMAC           : 0,
    ClientLinux         : 0,
    ClientAndroid       : 0,
    ClientIOS           : 0,
    ClientWECHAT        : 0,

    ClientDesktop       : 0,
    ClientMobile        : 0,
}
var bp = BearPara

Bear.Init()