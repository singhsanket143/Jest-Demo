function search(arr, el) {
    console.log("The array passed is ",arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == el) return true;
    }
    return false;
}

module.exports = search;