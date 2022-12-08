/** Tóm tắt kiến thức array
 * sort
 * filter
 * forEach
 * find
 * findIndex
 * map
 * reduce
 * 
 * Callback
 * Một hàm (giá trị hàm) được truyền vào một hàm khác dưới dạng đối số
 */

// function demo() {
//     console.log("Demo");
// }
// // Khai báo trực tiếp tại vị trí sử dụng
// function doSomethinhg(callback) {
//     const data = 10;

//     callback(data);
// }

// demo; // giá trị hàm
// demo(); // cuộc gọi hàm
// console.log(demo);

// let other = function() {

// }

// doSomethinhg(demo);
// doSomethinhg(other);
// doSomethinhg(function () {

// })

// // forEach làm một cái gì đó với mỗi phần tử trong mảng
// function pow(n) {
//     console.log(n ** 2);
// }
// let arr = [1, 4, 22, 33, 65];
// for (let i = 0; i < arr.length; i++) {
//     pow(arr[i]);
// }

// arr.forEach(pow);

// const array = ["Vy", "Ba", "Đuc", "Minh"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array.forEach(console.log);

/**
 * find - tìm ra giá trị đầu tiên với điều kiện
 */

// const arra = [10, 15, 12, 11, 9, 19, 17];

// function isPrime(n) {
//     if (n <2) return false;

//     for (let i = 2; i < n; i++) {
//         if(n & i ===0) return false;
//     }
//     return true;
// }

// let firtPrime;

// for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];

//     if (isPrime(n)) {
//         firtPrime = n;
//         break;
//     }
// }
// console.log(firtPrime);
// let firtPrimes = arr.find(isPrime);

// filter - tìm tất cả khớp với điều kiện

// let arr1 = [];
// for (let i = 0; i < arra.length; i++) {
//     if(isPrime(arra[i])) {
//         arr1.push(arra[i]);
//     }
// }

//  console.log(arr1);

// let result = arra.filter(isPrime);
// console.log(result);

// // findIndex - Tìm chỉ mục của giá trị đầu tiên khớp với điều kiện

// let index = arra.findIndex(isPrime);
// console.log(index);

// //map - biến đổi các phần tử trong mảng thành 1 giá trị khác

// function double(n) {
//     return n * n;
// }
// //biến đổi các số trong mảng thành double của số đó
// const arr = [3, 5, 2, 6];
// //[9, 25, 4, 36]

// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(double(arr[i]))
// }
// console.log(arr2);

// let doubled = arr.map(double);
// console.log(doubled);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

// function add( giatritichkuy, phantrutrongmang) {
//     return giatritichkuy + phantrutrongmang;
// }
// let total = arr.reduce(add, 0);
// console.log(total);

// sort - sắp xếp
