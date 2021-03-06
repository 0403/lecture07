var photoListElement = document.querySelector("#photos");
//photoListのsrc:"img/side.png", title: "横"の後に画像src:"img/google.jpg", title: "images"を追加（修正）
var photoList = [
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:	"img/side.png", title: "横"},
     {src:  "img/google.jpg", title: "images"}
];
var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
};
//photoList.lengthが追加した画像により１足されるので、修正前よりもwhile文での処理が一回増え
//追加した画像src:"img/google.jpg", title: "images"がsrc:"img/side.png", title: "横"の後に追加される
var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};

initApp();
