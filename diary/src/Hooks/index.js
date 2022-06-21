const useJson = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
const useDate = () => {
    const d = new Date()
    return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()} : ${d.getMinutes()} `

}
const useSort = (arr) => {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j].id > arr[j + 1].id) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
export {
    useJson,
    useDate,
    useSort,
}