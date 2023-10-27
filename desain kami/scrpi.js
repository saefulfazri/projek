//soal nomer 6
var sentence = "I am going to be React Native Developer";
var exampleFirstWord = sentence.split(" ")[0];
var exampleSecondWord = sentence.split(" ")[1];
var thirdWord = sentence.split(" ")[2];
var fourthWord = sentence.split(" ")[3];
var fifthWord = sentence.split(" ")[4];
var sixthWord = sentence.split(" ")[5];
var seventhWord = "JS";
var eighthWord = sentence.split(" ")[6];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

//soal nomer 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 18);
console.log(hasil);

//soal nomer 8
var nilaiDoe = 100;
var indeks;

if (nilaiDoe >= 80) {
  indeks = "A";
} else if (nilaiDoe >= 70) {
  indeks = "B";
} else if (nilaiDoe >= 60) {
  indeks = "C";
} else if (nilaiDoe >= 50) {
  indeks = "D";
} else {
  indeks = "E";
}

console.log("Indeks Nilai: " + indeks);

//soal nomer 9

let angka = 2;
let bisa = angka === 2 ? "angka nya 2" : "bukan angka 2";
console.log(bisa);

//soal nomer 10
var traffic_lights = "red";

switch (traffic_lights) {
  case "red":
    console.log("berhenti");
    break;
  case "yellow":
    console.log("hati-hati");
    break;
  case "green":
    console.log("berjalan");
    break;
  default:
    console.log("Status lampu lalu lintas tidak valid.");
}
