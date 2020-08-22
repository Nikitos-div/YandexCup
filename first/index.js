
const TEST = ['GREEN', 'GREEN', 'RED', 'GREEN', 'YELLOW', 'RED', 'GREEN', 'YELLOW', 'RED', 'YELLOW'];
const width = 5

function first(segments, width) {
    const colors = {
        GREEN: 1,
        YELLOW: 2,
        RED: 3
    }
    const median = (arr) => {
        arr.sort((a, b) => { colors[a] - colors[b] })
        return arr[Math.floor((arr.length - 1) / 2)]
    }
    let size = segments.length / width
    let res = []
    for (let i = 0; i < width; ++i) {
        res.push(median(segments.slice(i * size, (i + 1) * size)))
    }

    console.log(res)
}



first(TEST, width)


//почитать побольше про медианы 