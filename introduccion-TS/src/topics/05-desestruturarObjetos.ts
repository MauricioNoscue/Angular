
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year:number
}


const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "Ariana Grande",
        year: 2018
    }
}

const {song,details}=audioPlayer;

const{author}= details;
console.log('autor',author,'sonido',song)

const dbz: string []=['goku','vegeta', 'gohan'];

console.log('p1', dbz[2])

const [, , tr= 'not found']=dbz;
console.log(tr);

export {};