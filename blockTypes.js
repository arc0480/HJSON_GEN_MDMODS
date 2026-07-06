const BLOCK_TYPES = {

    GenericCrafter: {

        fields: [

            {
                key:"name",
                label:"名前",
                type:"text"
            },

            {
                key:"size",
                label:"サイズ",
                type:"number",
                value:2
            },

            {
                key:"craftTime",
                label:"クラフト時間",
                type:"number",
                value:120
            },

            {
                key:"power",
                label:"消費電力",
                type:"number",
                value:105
            }

        ]

    },

    Drill:{

        fields:[

            {
                key:"name",
                label:"名前",
                type:"text"
            },

            {
                key:"tier",
                label:"Tier",
                type:"number",
                value:1
            },

            {
                key:"drillTime",
                label:"採掘時間",
                type:"number",
                value:60
            }

        ]

    },

    Wall:{

        fields:[

            {
                key:"name",
                label:"名前",
                type:"text"
            },

            {
                key:"health",
                label:"HP",
                type:"number",
                value:500
            }

        ]

    }

};