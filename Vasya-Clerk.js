let peopleInLine = [25,25,25,100,25,25,50,100,25,25,50,100,25,25,25,100,25,25,25,100]


function tickets(peopleInLine){
    let dic = {
        twentyFives: 0,
        fifties: 0,
    }
    let flag = true
    peopleInLine.forEach((x => {
        switch(x){
            case 25:
                dic.twentyFives += 1
                break;
            case 50:
                if (dic.twentyFives >= 1){
                    dic.twentyFives -= 1
                    dic.fifties += 1
                    break;
                } else {
                    flag = false
                    break;
                }

            case 100:
                if (dic.fifties >= 1 && dic.twentyFives >= 1){
                    dic.fifties -= 1
                    dic.twentyFives -= 1
                    break;
                } else if (dic.twentyFives >= 3){
                    dic.twentyFives -= 3
                    break;
                } else {
                    flag = false
                    break;
                }

        }
    }))
    if (flag === false){
        return "NO"
    }
    return "YES"

}

console.log(tickets(peopleInLine))
     