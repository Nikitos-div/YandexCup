function second(chunkCount, emitter) {
    return new Promise((resolve, reject) => {
        let chunks = {}
        let downloaded = 0
        emitter.on(({ id, data, timestamp }) => {
            if (typeof chunks[id] !== 'undefined') {
                reject(`Дубль ${id}`)
            }
            else {
                chunks[id] = { data, timestamp }
                downloaded += 1
                console.log(downloaded)
                if (downloaded === chunkCount) {
                    const res = Object.values(chunks)
                        .sort((a, b) => a.timestamp - b.timestamp)
                        .map(({ data }) => data)
                        .join('')
                    resolve(res)
                }
            }
        })
        setTimeout(() => {
            reject('Timed Out')
        }, 1000)
    })
};
const test1 = 3
const test2 = { on: (fn) => { fn({ id: 5314, data: 'The Good, ', timestamp: new Date('2019-01-01') }); fn({ id: 1543, data: 'd the Ugly', timestamp: new Date('2019-01-03') }); fn({ id: 2494, data: 'the Bad an', timestamp: new Date('2019-01-02') }); } }
//const test2 = { on: (fn) => { fn({ id: 0, data: 'hello', timestamp: new Date('2019-01-01') }); fn({ id: 0, data: 'world', timestamp: new Date('2019-01-02') }); } }
second(test1, test2).then(data => console.log(data)).catch(err => console.log(err))






