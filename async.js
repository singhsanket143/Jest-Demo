function fetch(cb) {
    setTimeout(() => {
        const data = 'relevel';
        cb(data);
    }, 3000);
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'relevel';
            resolve(data);
        }, 3000);
    })
}

module.exports = {fetch, fetchPromise};