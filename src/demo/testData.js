const testData = [
    {
        id: 0,
        name: "Felidae",
        hasChildren: true,
        children: [
            {
                id: 1,
                name: "Pantherinae",
                hasChildren: true,
                levelFloor: [0, 1],
                children: [
                ]
            },
            {
                id: 4,
                name: "Felinae",
                hasChildren: true,
                levelFloor: [0, 1, 4],
                children: [
                    {
                        id: 5,
                        name: "Lynx",
                        levelFloor: [0, 1, 4, 5]
                    },
                    {
                        id: 6,
                        name: "Felis",
                        hasChildren: true,
                        levelFloor: [0, 1, 4, 6],
                        children: [{
                            id: 14,
                            name: "Fatty Oscar",
                            levelFloor: [0, 1, 4, 6, 14]
                        }]
                    },
                    {
                        id: 7,
                        name: "Pardofelis",
                        levelFloor: [0, 1, 4, 7],
                        hasChildren: false
                    },
                    {
                        id: 8,
                        name: "Caracal",
                        levelFloor: [0, 1, 4, 8],
                        hasChildren: false
                    },
                    {
                        id: 9,
                        name: "Leopardus",
                        levelFloor: [0, 1, 4, 9],
                        hasChildren: false
                    },
                    {
                        id: 10,
                        name: "Acinonyx",
                        levelFloor: [0, 1, 4, 10],
                        hasChildren: false
                    },
                    {
                        id: 11,
                        name: "Puma",
                        levelFloor: [0, 1, 4, 11],
                        hasChildren: false
                    },
                    {
                        id: 12,
                        name: "Octolobus",
                        levelFloor: [0, 1, 4, 12],
                        hasChildren: false
                    },
                    {
                        id: 13,
                        name: "Prionailurus",
                        levelFloor: [0, 1, 4, 13],
                        hasChildren: false
                    }
                ]
            }
        ]
    },
]

export default testData;