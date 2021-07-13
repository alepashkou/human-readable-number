module.exports = function toReadable(number) {
    
    let numLatters = [
        [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ]
    return main(number).trim()

    function main(number) {
        if (number === 0) {
            return 'zero'
        }else if (number >= 1 && 99 >= number) {
           return XX(number)
        }else if(number >= 100){
          return XXX(number)
        }
    }

    function XX(number){
     if(number >= 10 && 19 >= number){
        number = number - 10
        return numLatters[1][number]  
    }   else  if (0 === number % 10){
        return numLatters[2][number / 10]
    }
    else if (number < 10) {
        return numLatters[0][number]
    } else{
        return numLatters[2][Math.floor(number / 10)] + ' ' + numLatters[0][number % 10]
    }

    }
    function XXX(number){
        if (0 === number % 100) {
            return numLatters[0][number / 100] + ' ' + 'hundred'
    } else {
        return numLatters[0][Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + XXXtoXX(number)
    }
    function XXXtoXX(number){
        number = number % 100
        XX(number)
        return XX(number)
    }
                         }
}