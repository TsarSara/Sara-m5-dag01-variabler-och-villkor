// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.

// STEG 1 ------------------------------------------------------------
// TODO: skriv ut texten "Hej från Kafé Kardemumma" med console.log
console.log("Hej från Kafé Kardemumma");

// STEG 2 ------------------------------------------------------------
// TODO: skapa konstanten kafeNamn (string) med värdet "Kafé Kardemumma"
const kafeNamn: string = "Kafé Kardemumma";
console.log(kafeNamn);
// TODO: skapa konstanterna prisBulle (number, 35) och prisKaffe (number, 32)
const prisBulle: number = 35;
const prisKaffe: number = 32;
console.log(prisBulle, prisKaffe);
// TODO: skapa variablerna antalBullar (2) och antalKaffe (1) med let, båda number
let antalBullar: number = 2;
let antalKaffe: number = 1;
console.log(antalBullar, antalKaffe);
// TODO: skriv ut kafeNamn
//       Skriv typen själv, till exempel:  const kafeNamn: string = "..."
// Jag fattar inte riktigt den här. Ska jag skapa en ny kafeNamnvariabel, byta namn på Kafét eller bara skriva ut det med console.log?
// Vet inte om de två meningarna hör ihop eller inte :)
//const kafeNamn: string = "Panda kafè"; Det funkar ju inte eftersom det redan finns en const kafeNamn.
console.log(kafeNamn);

// STEG 3 ------------------------------------------------------------
// TODO: skapa en string, ett number, en boolean, en undefined och en null
//       Typerna heter string, number, boolean, undefined och null
const name: string = "Sara";
let age: number = 52;
let isEmployed: boolean = false;
let futureJob;
// När solen skiner så tänker jag:
let currentJob = null;
// Här handlar det om framtidstro, eller inte. När det är grått ute blir det nog mer:
//const currentJob: null; 

// TODO: skriv ut typeof för alla fem på en rad (tips: separera med komma) 
// Jag trodde att null skulle bli object eftersom du sa det på föreläsningen. :)
console.log(typeof "Sara", typeof 52, typeof false, typeof futureJob, typeof null); 
// TODO: prova att ge number-variabeln en text. Vad säger TypeScript?
// Error: Type 'string' is not assignable to type 'number'. ts(2322)

// STEG 4 ------------------------------------------------------------
// TODO: räkna ut summa = antalBullar * prisBulle + antalKaffe * prisKaffe
// TODO: räkna ut momsDel (12 % ingår i priset): summa * 0.12 / 1.12
// TODO: skriv ut "Summa: ... kr" och "Varav moms (12 %): ... kr"
//       Moms ska ha två decimaler (toFixed(2))
//       Håll musen över momsDel.toFixed(2). Vilken typ ger toFixed?


// STEG 5 ------------------------------------------------------------
// TODO: skapa ärStudent (boolean, true). Om ärStudent är true: rabatt 10 %.
// TODO: räkna ut attBetala (number) och skriv ut "Att betala: ... kr"


// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"


// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
