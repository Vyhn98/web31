/**
 *  Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * 
 * Bước 1: Xét điều kiện cho "kwh", để xác định "kwh" thuộc khoảng giá trị nào để áp dụng công thức tính tiền
 * Bước 2: Thực hiện tính bill bằng công thức: kwh*"giá trị tại mỗi điều kiện đã xác định"
 * Bước 3: Trả về kết quả bill
 */

function bill(kwh) {
    if (kwh <= 50) {
        bill = kwh * 1678;
    } else if (kwh > 50 && kwh <= 100) {
        bill = kwh * 1734;
    } else if (kwh > 100 && kwh <= 200) {
        bill = kwh * 2014;
    } else if (kwh > 200 && kwh <= 300) {
        bill = kwh * 2536;
    } else if (kwh > 300 && kwh <= 400) {
        bill = kwh * 2834;
    } else {
        bill = kwh * 2927;
    }
    return bill;
}
console.log(bill(500)); //1463500

/**
 * Chuỗi time biểu thị thời gian
 */
function calcTime(time, n) {

}
console.log();

/**
 *  Kiểm tra một chuỗi có phải đối xứng hay không
 */

function isPalindrome(str) {

    
}

/**
 * Con ốc sên
 * Bước 1: Xác định điều kiện, khoảng cách giếng lớn hơn 0, khoảng cách leo ban ngày dài hơn ban đêm và khoảng cách ban đêm lớn hơn 0
 * Bước 2: Thực hiện phép tính. Khoảng cách giếng "h" chia cho khoảng cách ốc sên leo được trong 1 ngày (x - y): h/(x - y)
 */

function snail(h, x, y) {
    if (h > 0 && x > y && y > 0) {
        snail = h / (x - y);
    } else {
        console.log('Mời nhập lại')
    }
    return snail;
}
console.log(snail(10, 3, 1)); //5

/**
 * Sắp xếp các chữ số trong một số nguyên dương bất kỳ
 */

function sortNumber(n) {
}


/**
 * Object chứa thông tin về sinh viên
 */

function sortStudents(students) {
   
}
