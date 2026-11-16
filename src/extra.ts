// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
const veckodag: string = "söndag";
const klockslag: number = 13;

// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
let isOpen: boolean; 

if (veckodag === "lördag" || veckodag === "söndag") {
    isOpen = klockslag >= 9 && klockslag <= 16;
} else  {
    isOpen = klockslag >= 7 && klockslag <= 18; 
} 
console.log(isOpen);
   
/* 
if ((veckodag === "lördag" || veckodag === "söndag") && klockslag >= 9 && klockslag <= 16) {
    console.log("Det är öppet!");
} else if (veckodag !== "lördag" && veckodag !== "söndag" && klockslag >= 7 && klockslag <= 18) {
    console.log("Det är öppet!");
} else {
    console.log("Det är stängt!");
}
*/
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"
const text = isOpen ? "ja" : "nej";

console.log(`Öppet just nu: ${text}`);
/*  
// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
console.log("5" + 3); // 53
//console.log("5" - 3); // Det blir nog inte 53 eftersom vs code varnar på en gång. Det blev 2. 
// Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts()
console.log(true + 1);//Error: Operator '+' cannot be applied to types 'boolean' and 'number'.
//Det känns som att jag har kunnat det här, men nu har jag ingen aning. Det blev 2, det känns bekant nu så här i efterhand. 
console.log(0.1 + 0.2); //0.3, det blev visst några till decimaler... 0.30000000000000004
console.log("" === 0); // Det är inte samma på båda sidor så det borde vara false. 
console.log(null == undefined); // Vi ska ju inte använda == men jag kommer inte ihåg varför. 
// Vet inte vad resultatet kommer att bli. Det blev visst true.
console.log(null === undefined); // Var bara tvungen att kolla om det blev false :) 
*/