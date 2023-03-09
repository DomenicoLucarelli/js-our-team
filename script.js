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
        title: 'Social Media Manager',
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

// --------------------------MILESTONE----------------------------
// for(i=0 ; i < team.length; i++){

//     for(let stamp in team[i]){
//         console.log(`${[stamp]}: ${team[i][stamp]}`)
//     }
// }

// let nomeEl = document.querySelectorAll('.nome');
// let roleEl = document.querySelectorAll('.role')
// let imageEl = document.querySelectorAll('.image')



//     for(i = 0; i < 6; i++){

//         nomeEl[i].innerHTML = team[i].name;
//         roleEl[i].innerHTML = team[i].title;
//         imageEl[i].innerHTML = team[i].profile;


//     }


// -------------------------------BONUS--------------------------------------

let cardImageEl = document.querySelectorAll('.card-image');
let nameEl = document.querySelectorAll('.name');
let roleEl = document.querySelectorAll('.role');



for( i = 0; i < 6; i++){
    let newImage = document.createElement('img');

    cardImageEl[i].append(newImage);

    newImage.src = `img/${team[i].profile}`;

    nameEl[i].innerHTML = team[i].name
    roleEl[i].innerHTML = team[i].title 
    
}