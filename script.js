let team = [
    {
        name: 'Wayne Barnett',
        title: 'Founder & CEO',
        profile: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        title: 'Chief Editor',
        profile: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        title: 'Office Manager',
        profile: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        title: 'social Media Manager',
        profile: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        title: 'Developer',
        profile: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        title: 'Graphic Designer',
        profile: 'barbara-ramos-graphic-designer.jpg',
    }
]

for(let stamp in team){
    console.log(team[stamp]['name'])
    console.log(team[stamp]['title'])
    console.log(team[stamp]['profile'])



}