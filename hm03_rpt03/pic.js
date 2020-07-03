// 미리 로딩해둘 이미지 이름 배열
var files = [
  "media2/Stacks of Wheat (End of Summer).jpg",
  "media2/Water Lilies.jpg",
  "media2/A Sunday on La Grande Jatte.jpg",
  "media2/Paris Street  Rainy Day.jpg",
  "media2/The Bedroom.jpg"
];
var imgs = new Array();
for (var i = 0; i < files.length; i++) {
  imgs[i] = new Image(); // 메모리에 이미지 객체 생성
  imgs[i].src = files[i]; // 이미지 로딩
}

// 다음 이미지 출력
var next = 1;
function change(img) {
  img.src = imgs[next].src; // 이미지 변경
  var nameSplit = files[next].split('/');
  var infoText = document.getElementById("info");
  var nameText = document.getElementById("name");
  var sizeText = document.getElementById("size");
  infoText.innerHTML = "<strong>" + " Information" + "</strong>";
  nameText.innerHTML = "Name : " + nameSplit[1]; // 이벤트 객체의 프로퍼티 출력
  sizeText.innerHTML = "Width : " + img.width + "<br>" + "Height : " + img.height;
  next++; // 다음 이미지
  next %= imgs.length; // 개수를 넘으면 처음으로
}
function init(img) {
  var nameSplit = files[next - 1].split('/');
  var infoText = document.getElementById("info");
  var nameText = document.getElementById("name");
  var sizeText = document.getElementById("size");
  img.src = files[next - 1];
  infoText.innerHTML = "<strong>" + " Information" + "</strong>";
  nameText.innerHTML = " Name: " + nameSplit[1]; // 이벤트 객체의 프로퍼티 출력
  sizeText.innerHTML = "Width : " + img.width + "<br>" + "Height : " + img.height;
}