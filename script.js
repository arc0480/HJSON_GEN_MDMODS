const typeSelect = document.getElementById("type");
const fieldsDiv = document.getElementById("fields");
const output = document.getElementById("output");

// プルダウン作成
for(const type in BLOCK_TYPES){

    const option=document.createElement("option");

    option.value=type;
    option.textContent=type;

    typeSelect.appendChild(option);

}

// 入力欄生成
function createFields(){

    fieldsDiv.innerHTML="";

    const block=BLOCK_TYPES[typeSelect.value];

    block.fields.forEach(field=>{

        const label=document.createElement("label");

        label.textContent=field.label;

        const input=document.createElement("input");

        input.type=field.type;

        input.id=field.key;

        if(field.value!==undefined)
            input.value=field.value;

        fieldsDiv.appendChild(label);

        fieldsDiv.appendChild(document.createElement("br"));

        fieldsDiv.appendChild(input);

        fieldsDiv.appendChild(document.createElement("br"));

        fieldsDiv.appendChild(document.createElement("br"));

    });

}

typeSelect.onchange=createFields;

createFields();

// HJSON生成
document.getElementById("generate").onclick=()=>{

    const block=BLOCK_TYPES[typeSelect.value];

    let text="";

    text+="type: "+typeSelect.value+"\n";

    block.fields.forEach(field=>{

        const value=document.getElementById(field.key).value;

        text+=field.key+": "+value+"\n";

    });

    output.value=text;

};