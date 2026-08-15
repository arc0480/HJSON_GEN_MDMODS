const fields = ['name', 'displayName', 'description', 'cost', 'color'];
const outputTextarea = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

// 入力内容からHJSONテキストを組み立てる関数
function generateHJSON() {
  const name = document.getElementById('name').value;
  const displayName = document.getElementById('displayName').value;
  const description = document.getElementById('description').value;
  const cost = document.getElementById('cost').value;
  const color = document.getElementById('color').value.replace('#', '');

  // HJSONフォーマットの生成（キーのクォート省略やマルチライン文字列を活用）
  const hjson = `name: "${name}"
displayName: "${displayName}"
description: "${description}"
cost: ${cost}
color: "${color}"
`;

  outputTextarea.value = hjson;
}

// 入力フィールド変更時にリアルタイム更新
fields.forEach(id => {
  document.getElementById(id).addEventListener('input', generateHJSON);
});

// コピー機能
copyBtn.addEventListener('click', () => {
  outputTextarea.select();
  navigator.clipboard.writeText(outputTextarea.value);
  alert('HJSONをコピーしました！');
});

// 初期表示用に実行
generateHJSON();
