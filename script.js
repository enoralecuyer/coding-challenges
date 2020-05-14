const fs = require ('fs')

// 1 - What floor does Santa end up on?
// ( -> should go UP one floor
// ) -> should go DOWN one floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q1 = santa-time')
        const directions = data.toString()
        const directionsArray = directions.split('')
        const answer = directionsArray.reduce((accumulator, currentValue) => {
            if (currentValue === '(') {
                return accumulator += 1
            } else if (currentValue === ')') {
                return accumulator -=  1
            }
        }, 0)
        console.timeEnd('q1 = santa-time')
        console.log('Santa ends up on floor', answer)
    }) 
}

question1()

// 2 - When does Santa first enter the basement?

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q2 = santa-time')
        const directions = data.toString()
        const directionsArray = directions.split('')
        let accumulator = 0
        let counter = 0
        const answer = directionsArray.some((currentValue) => {
            if (currentValue === '(') {
                accumulator += 1
            } else if (currentValue === ')') {
                accumulator -=  1
            }
            counter ++
            return accumulator < 0
        })
        console.timeEnd('q2 = santa-time')
        console.log('Santa first enter the basement at', counter)
    }) 
}

question2()