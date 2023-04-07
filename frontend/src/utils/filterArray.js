

export const filterArr = (arr, idx) => {

    let newArr = arr.filter((ele) => {

        return ele.idx !== idx;

    })

    return newArr;


}