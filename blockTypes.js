/*
 * 共通項目
 * 全てのブロックタイプで表示する入力項目
 */
const COMMON_FIELDS = [

    // ブロック名
    {
        key: "name",
        label: "名前",
        type: "text",
        default: ""
    },

    // 説明
    {
        key: "description",
        label: "説明",
        type: "textarea",
        default: ""
    },

    // カテゴリ
    {
        key: "category",
        label: "カテゴリ",
        type: "select",
        options: [
            "crafting",
            "production",
            "distribution",
            "power",
            "defense",
            "turret",
            "units",
            "effect",
            "logic"
        ],
        default: "crafting"
    },

    // 研究ツリー
    {
        key: "research",
        label: "研究",
        type: "text",
        default: ""
    },

    // 常時アンロック
    {
        key: "alwaysUnlocked",
        label: "常時アンロック",
        type: "checkbox",
        default: true
    }

];

/*
 * ブロックタイプごとの設定
 *
 * fields
 * そのブロックだけに表示する入力項目
 */
const BLOCK_TYPES = {

    // ===========================
    // GenericCrafter
    // ===========================
    GenericCrafter: {

        fields: [

            {
                key: "size",
                label: "サイズ",
                type: "number",
                default: 2
            },

            {
                key: "hasPower",
                label: "電力を使用",
                type: "checkbox",
                default: true
            },

            {
                key: "hasItems",
                label: "アイテムを使用",
                type: "checkbox",
                default: true
            },

            {
                key: "craftTime",
                label: "クラフト時間",
                type: "number",
                default: 60
            },

            {
                key: "updateEffect",
                label: "更新エフェクト",
                type: "text",
                default: ""
            },

            {
                key: "power",
                label: "消費電力",
                type: "number",
                default: 0
            },

            {
                key: "inputItems",
                label: "入力アイテム",
                type: "textarea",
                default: ""
            },

            {
                key: "outputItems",
                label: "出力アイテム",
                type: "textarea",
                default: ""
            },

            {
                key: "requirements",
                label: "建築素材",
                type: "textarea",
                default: ""
            }

        ]

    },

    // ===========================
    // Drill
    // ===========================
    Drill: {

        fields: [

            {
                key: "size",
                label: "サイズ",
                type: "number",
                default: 2
            },

            {
                key: "tier",
                label: "Tier",
                type: "number",
                default: 1
            },

            {
                key: "drillTime",
                label: "採掘時間",
                type: "number",
                default: 60
            },

            {
                key: "requirements",
                label: "建築素材",
                type: "textarea",
                default: ""
            }

        ]

    },

    // ===========================
    // Wall
    // ===========================
    Wall: {

        fields: [

            {
                key: "size",
                label: "サイズ",
                type: "number",
                default: 1
            },

            {
                key: "health",
                label: "HP",
                type: "number",
                default: 500
            },

            {
                key: "requirements",
                label: "建築素材",
                type: "textarea",
                default: ""
            }

        ]

    }

};