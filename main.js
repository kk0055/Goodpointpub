(function(){
'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentBtn = document.getElementById('assement');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

//delete all elements
function removeAllChildren(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

assessmentBtn.onclick = () => {
  const userName = userNameInput.value;
if(userName.length === 0){
  return '';
}


while(resultDivided.firstChild) {
  resultDivided.removeChild(resultDivided.firstChild);
}


const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);
const paragraph = document.createElement('p');
const result =  assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);
 
}



const answers =[
  '{userName}のいいところは声です。{userName}の特徴的な声は人を惹きつけ耳に残ります。',

  '{userName}のいいところは全部です。', 
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は気になって仕方ないでしょう。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が他よりにしています。',
  '{userName}のいいところはありません。',
  '{userName}のいいところはユニークさです。{userName}の特徴的な声は人を惹きつけ耳に残ります。',
  '{userName}のいいところはお金です。{userName}のお金持ち具合は半端ではありません。',
  '{userName}のいいところは好奇心です。{userName}の好奇心は人を惹きつけます。',
  '{userName}のいいところはユーモアです。{userName}の面白さは誰もがあこがれます。',
  '{userName}のいいところはパワーです。ベンチプレス150KGはすごいです。',
  '{userName}のいいところは声です。{userName}の特徴的な声は人を惹きつけ耳に残ります。',
  '{userName}のいいところは自制心です。しっかりと衝動を抑えられる{userName}はみんなから評価されてます。'
];

function assessment(userName) {

 
  let SumOfCcode = 0;
  for(let i = 0; i < userName.length; i++){
    SumOfCcode = SumOfCcode + userName.charCodeAt(i);
  }
 

 const index = SumOfCcode % answers.length;
 let result = answers[index];

result = result.replace(/{userName}/g,userName);
return result;

}



})();

