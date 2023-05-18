//                  number   masalalari

//  1-masala: istalgan sonni binary korinishiga otkazb nechta 0 va nechta 1 qatnashganni aniqlang.
// ex:5===101
//res: 2ta bir,1ta nol qatnashgan.

// 2-masala:berilgan sonlar ichidan eng katta va eng kichik sonlar ayirmasini toping.manfiy son chiqmasligi kerak.

// 3-masala:Math ning trunc vs floor vs ceil,parseInt lar bn farqini tushuntiring.

// 4-masala: randomIntiger(min,max) funcsion yozilsin.min max oralig'idagi random raqamini chiqarib bering.
//es:min=1,max=50,
// output:1dan 50 gacha bo'lgan ixtiyoriy son.
// =======================================================================================
//                                    1-masala

//  function bayneri(n) {
//        str=n.toString(2)
//       let a=0;
//       let b=0;
//         for(i of str){
//             if(i==0){
//                a++;
//             };
//             if(i==1){
//                 b++;
//             };

//         };
//         console.log(n.toString(2));
//         console.log(a+ " - ta nol" );
//         console.log(b+ " - ta bir");
//  };
// bayneri(14)
// ============================================================================
//                       2-masala

// let arr = [12,15,20,27,10];
// function max_min (arr){
//    let max = arr[0];
//    let min = arr[0];
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] > max) {
//          max = arr[i];
//       }
//       else if (arr[i] < min) {
//          min = arr[i];
//       }
//    };
//    console.log(max -min);
// };
//  max_min(arr);
// ============================================================

//               4-masala

// function getRandomInt(min,max) {
//   return Math.floor(Math.random() * (max-min+1)+min);
// }
// console.log(getRandomInt(2,20));

// ======================================================================

//             5-masala
// let a=535;
// let res=0;
 
// while (a) {
//    res += a%10;
//    a = parseInt(a/10);

// };
// console.log(res);


