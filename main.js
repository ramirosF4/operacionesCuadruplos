
const ejercicio1 = () => {
let a = 2 , b = 3 , c = 4, d = 5 , e = 6, f = 12, g = 8;
let t1 = e / f; 
let t2 = t1 * g; 
let t3 = t2 + d; 
let t4 = b - c; 
let t5 = t4 + a; 

let res = t3 * t5;

console.log("1) \n res =",res);

console.log("**************************************");

}



const ejercicio2 = () => {
//x = ((m * n) / (p + q)) * (r * k);
let m = 7 , n = 5 , z = 4, r = 4 , k = 1, p =3 ,q = 2;

let t1 =  m * n ; 
let t2 = r * k ; 
let t3 = p + q;
let t4 = t3 * t2;
let t5 = t1 / t4; 
let resu= t5 ;

console.log("2) \n res =", resu);

console.log("**************************************");
}

const ejercicio3 = () => {
//total = (a + b * c) * (d - e) - (f + g);

let a = 2 , b = 3 , c = 4 , d = 5 , e = 6 , f = 12 , g = 8;

let t1 = b * c; 
let t2 = t1 + a;
let t3 = d - e; 
let t4 = f + g; 
let t5 = t2 * t3; 
let total = t5 - t4;


console.log("3) \n total =", total);
console.log("**************************************");

}
const ejercicio4 = () => {
//val = a * (b + (c / d)) - e * (f + g);

let a = 2 , b = 3 , c = 4 , d = 5 , e = 6 , f = 12 , g = 8;
let t1 = c / d;
let t2 = b +t1;
let t3 = f + g;
let t4 = e * t3;
let t5 = a * t2;
let val = t5 - t4;

console.log("4) \n val =", val);
console.log("**************************************");
}

const ejercicio5 = () => {
//z = (x + y / o) * r + ((a * b + k) / (c + d));


let x = 2 , y = 3 , o = 4 , r = 5 , a = 6 , b = 7 , k = 8 , c = 9 , d = 10;

let t1 = y / o;
let t2 = x + t1;
let t3 = a * b;
let t4 = t3 + k;
let t5 = c + d;
let t6 = t4 / t5;
let t7 = r * t2;
let z = t7 + t6;

console.log("5) \n z =", z);
console.log("**************************************");
}

ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();