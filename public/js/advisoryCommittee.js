var committee = [
    {
        name: "",
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
    obj += `${membersHtml}`
}
committee.forEach(type => {
    getMembersData(type);
})
committeeGrids.innerHTML = obj;