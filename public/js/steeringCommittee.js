var committee = [
    {
        name: "Patron",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "General Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Honorary Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Conference Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Technical Program Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Editorial Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Publication Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Co-Convener",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Publicity Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Organizing Chair",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Organizing Team",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Organising Secretary",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },
    {
        name: "Convener",
        members: [
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
            {
                memberName: 'Dr Sheldon Cooper',
                memberSub: 'Caltech University, California'
            },
        ]
    },


]

const committeeGrids = document.querySelector('.committeeGrids');
var obj = ``;

const getMembersData = (committee) => {
    var membersHtml = ``;
    console.log(committee.name);
    committee.members.forEach(member => {
        // console.log(member.memberName);
        // console.log(member.memberSub);
        membersHtml += ` 
                <div>
                    <h3>${member.memberName}</h3>
                    <p>${member.memberSub}</p>
                </div>
                `
    })
    obj += `<article class="committeeMembers">
                <h2>${committee.name} (s):</h2>
               ${membersHtml}
            </article>`
}
committee.forEach(type => {
    getMembersData(type);
})
committeeGrids.innerHTML = obj;