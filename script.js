//==============================
// HTML要素を取得
//==============================

const typeSelect = document.getElementById("type");
const fieldsDiv = document.getElementById("fields");
const output = document.getElementById("output");
const generateButton = document.getElementById("generate");


//==============================
// ブロックタイプ一覧を作成
//==============================

for(const type in BLOCK_TYPES){

    const option = document.createElement("option");

    option.value = type;
    option.textContent = type;

    typeSelect.appendChild(option);

}


//==============================
// 入力欄を作成
//==============================

function createFields(){

    // 一旦削除
    fieldsDiv.innerHTML = "";

    // 共通項目 + ブロック固有項目
    const fields = [
        ...COMMON_FIELDS,
        ...BLOCK_TYPES[typeSelect.value].fields
    ];

    fields.forEach(field=>{

        // ラベル
        const label = document.createElement("label");
        label.textContent = field.label;

        fieldsDiv.appendChild(label);

        let input;

        //==========================
        // テキストエリア
        //==========================

        if(field.type == "textarea"){

            input = document.createElement("textarea");

            input.rows = 4;

        }

        //==========================
        // プルダウン
        //==========================

        else if(field.type == "select"){

            input = document.createElement("select");

            field.options.forEach(optionText=>{

                const option = document.createElement("option");

                option.value = optionText;
                option.textContent = optionText;

                input.appendChild(option);

            });

        }

        //==========================
        // チェックボックス
        //==========================

        else if(field.type == "checkbox"){

            input = document.createElement("input");

            input.type = "checkbox";

            input.checked = field.default;

        }

        //==========================
        // 通常入力
        //==========================

        else{

            input = document.createElement("input");

            input.type = field.type;

            input.value = field.default;

        }

        // ID設定
        input.id = field.key;

        fieldsDiv.appendChild(input);

        fieldsDiv.appendChild(document.createElement("br"));
        fieldsDiv.appendChild(document.createElement("br"));

    });

}


//==============================
// HJSON生成
//==============================

function generateHjson(){

    let text = "";

    // typeは必ず出力
    text += "type: " + typeSelect.value + "\n";

    // 共通＋固有
    const fields = [
        ...COMMON_FIELDS,
        ...BLOCK_TYPES[typeSelect.value].fields
    ];

    fields.forEach(field=>{

        const element = document.getElementById(field.key);

        let value;

        // チェックボックス
        if(field.type=="checkbox"){

            value = element.checked;

        }else{

            value = element.value;

        }

        // 空欄なら出力しない
        if(value==="" || value==null) return;

        //------------------------------------
        // descriptionだけ特殊
        //------------------------------------

        if(field.key=="description"){

            text +=
`description:
'''
${value}
'''
`;

            return;
        }

        //------------------------------------
        // textarea
        //------------------------------------

        if(field.type=="textarea"){

            text += field.key + ":\n";

            text += "[\n";

            value.split("\n").forEach(line=>{

                if(line.trim()!="")
                    text += "    " + line + "\n";

            });

            text += "]\n";

            return;
        }

        //------------------------------------
        // 通常
        //------------------------------------

        text += field.key + ": " + value + "\n";

    });

    output.value = text;

}


//==============================
// イベント
//==============================

// タイプ変更
typeSelect.addEventListener("change",createFields);

// 生成ボタン
generateButton.addEventListener("click",generateHjson);

// 初回表示
createFields();