// export hard coded files to render tree view
export const files = {
    name: "Roots",
    isFolder: true,
    children: [{
        name: "Capsules",
        isFolder: true,
        children: [{
            name: "All Capsules",
            isFolder: false
        },
        {
            name: "One Capsule",
            isFolder: false
        },
        {
            name: "Upcoming Capsules",
            isFolder: false
        },
        {
            name: "Past Capsules",
            isFolder: false
        }]
    },
    {
        name: "Cores",
        isFolder: true,
        children: [{
            name: "All Cores",
            isFolder: false
        },
        {
            name: "One Core",
            isFolder: false
        },
        {
            name: "Upcoming Cores",
            isFolder: false
        },
        {
            name: "Past Cores",
            isFolder: false
        }]
    },
    {
        name: "Dragons",
        isFolder: true,
        children: [{
            name: "All Dragons",
            isFolder: false
        },
        {
            name: "One Dragon",
            isFolder: false
        }]
    },
    {
        name: "History",
        isFolder: true,
        collapsed : true,
        children: [{
            name: "All Historical Events",
            isFolder: false
        },
        {
            name: "One Historical Event",
            isFolder: false
        }]
    },
    {
        name: "Info",
        isFolder: true,
        children: [{
            name: "Company Info",
            isFolder: false
        },
        {
            name: "API Info",
            isFolder: false
        }]
    },

    ]

}