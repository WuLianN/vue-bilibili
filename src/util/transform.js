/**
 * @description: 格式化秒数
 * @param {type}
 * @return:
 */
export function formatSec(num) {
    let Tnum = parseInt(num)
    // let H = this.$toZero(Math.floor(num / 3600));
    let M = toZero(Math.floor(Tnum % 3600 / 60))
    let S = toZero(Math.floor(Tnum % 60))
    // return H + ":" + M + ":" + S;
    return M + ':' + S
}

export function toZero(num) {
    if (num <= 9) {
        return '0' + num
    } else {
        return '' + num
    }
}
