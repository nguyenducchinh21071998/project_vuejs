/* eslint-disable */
// 個人一覧で番号が入力される設定と、position:stickyのIE対応をしています。

// グループリストの番号表示
const groupListNum = document.getElementsByClassName('groupList__num');
const num = groupListNum.length;

for (let i = 0; i < num; i++) {
  groupListNum[i].innerHTML = i + 1;
}

// sticky IE対応
var elem = document.querySelectorAll('.sticky');

if (elem.length) {
  Stickyfill.add(elem);
}
