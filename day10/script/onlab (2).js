/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {}

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {}

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {}

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {}

// function countLegs()

// Tính số chân gà và chố
// Vừa gà vừa chó
// Bố lại cho tròn
// 36 con
// chân chẵn

function countLegs(){
    const CHICK_LEGS = 2;
    const DOG_LEGS = 4;
    const TOTAL = 36;
    const TOTAL_LEGS = 100;

    let dogs = 1;
    let chicken = TOTAL - dogs;

    while (dogs * DOG_LEGS + chicken * CHICK_LEGS != TOTAL_LEGS){
        dogs++;
        chicken++;
    }
    console.log(`So cho la ${dogs} va so ga la ${chicken}`);
}