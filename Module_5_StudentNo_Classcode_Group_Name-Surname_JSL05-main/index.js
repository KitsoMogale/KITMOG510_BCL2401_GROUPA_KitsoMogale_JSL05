// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Logan", artist: "Emtee", genre: "Pop" },
    { title: "Rollup", artist: "Hustler", genre: "Pop" },
    { title: "Wave", artist: "Emtee", genre: "Rock" },
    { title: "Re_Up", artist: "Emtee", genre: "R&B" },
    { title: "Johustleburg", artist: "Emtee", genre: "R&B" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"R&B",
    "Rocket":"Pop",
    "Groot":"Rock"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here


    //grab div element in index.html

const divPlaylist = document.getElementById('playlists');

    // "first" variable to store an array of objects in songs array,that have the same genre vlaue as the Star-Lord.
    let first = songs.map(song => {

        // check which object has Star-Lord's genre
        if(song.genre == guardians["Star-Lord"]){
           const art = song.artist
           const title = song.title

           // return an array of arrays that contain title string and artist string
            return[ `${title}`, ` by ${art}`]
        }

        // return undefined if not true
        return 
       
    });


    // filter out undefined values in "first" array
    const first_filtered = first.filter(item => item !== undefined);

    const div1 = document.createElement('div');
    div1.classList.add('playlist');
    const pn = document.createElement('h3');
    pn.innerText = 'Star-Lord';
    div1.appendChild(pn);

    
    for(let i = 0;i < first_filtered.length;i++){
       const p = document.createElement('p');
       const span = document.createElement('span');
       span.classList.add('song-title');

       //place the title string in the span element created
       span.innerText = first_filtered[i][0];
       
       //add the artist string and 
       p.appendChild(span);
       p.innerHTML += first_filtered[i][1];
       div1.appendChild(p);
    }
    
    divPlaylist.appendChild(div1);

    
    //repeat the above steps but store in different variables for each guardian
    let second = songs.map(song => {
        if(song.genre == guardians.Gamora){
           let art = song.artist
           let title = song.title
            return[ `${title}`, ` by ${art}`]
        }
    });

    const second_filtered = second.filter(item => item !== undefined);

    const div2 = document.createElement('div');
    div2.classList.add('playlist');
    const pn2 = document.createElement('h3');
    pn2.innerText = 'Gamora';
    div2.appendChild(pn2);

    for(let i = 0;i < second_filtered.length;i++){
       const p = document.createElement('p');
       const span = document.createElement('span');
       span.classList.add('song-title');
       span.innerText = second_filtered[i][0];
       p.appendChild(span);
       p.innerHTML += second_filtered[i][1];
       div2.appendChild(p);
    }
    
    divPlaylist.appendChild(div2);



    let third = songs.map(song => {
        if(song.genre == guardians.Drax){
           let art = song.artist
           let title = song.title
            return [ `${title}`, ` by ${art}`]
        }
    });

    const third_filtered = third.filter(item => item !== undefined);

    const div3 = document.createElement('div');
    div3.classList.add('playlist');
    const pn3 = document.createElement('h3');
    pn3.innerText = 'Drax';
    div3.appendChild(pn3);
    
    for(let i = 0;i < third_filtered.length;i++){
       const p = document.createElement('p');
       const span = document.createElement('span');
       span.classList.add('song-title');
       span.innerText = third_filtered[i][0];
       p.appendChild(span);
       p.innerHTML += third_filtered[i][1];
       div3.appendChild(p);
    }
     
    divPlaylist.appendChild(div3);

    let fourth = songs.map(song => {
        if(song.genre == guardians.Rocket){
           let art = song.artist
           let title = song.title
            return [ `${title}`, ` by ${art}`]
        }
    });

    const fourth_filtered = fourth.filter(item => item !== undefined);

    const div4 = document.createElement('div');
    div4.classList.add('playlist');
    const pn4 = document.createElement('h3');
    pn4.innerText = 'Rocket';
    div4.appendChild(pn4);
    
    for(let i = 0;i < fourth_filtered.length;i++){
       const p = document.createElement('p');
       const span = document.createElement('span');
       span.classList.add('song-title');
       span.innerText = fourth_filtered[i][0];
       p.appendChild(span);
       p.innerHTML += fourth_filtered[i][1];
       div4.appendChild(p);
    }
    
    divPlaylist.appendChild(div4);




    let fifth = songs.map(song => {
        if(song.genre == guardians.Groot){
           let art = song.artist
           let title = song.title
            return [ `${title}`, ` by ${art}`]
        }
    });

    const fifth_filtered = fifth.filter(item => item !== undefined);

    const div5 = document.createElement('div');
    div5.classList.add('playlist');
    const pn5 = document.createElement('h3');
    pn5.innerText = 'Groot';
    div5.appendChild(pn5);
    
    for(let i = 0;i < fifth_filtered.length;i++){
       const p = document.createElement('p');
       const span = document.createElement('span');
       span.classList.add('song-title');
       span.innerText = fifth_filtered[i][0];
       p.appendChild(span);
       p.innerHTML += fifth_filtered[i][1];
       div5.appendChild(p);
    }
    
    divPlaylist.appendChild(div5);

   




}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


