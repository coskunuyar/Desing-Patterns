class CumulativeSum{
    constructor(initialValue = 0){
        this.sum = initialValue;
    }

    add(value){
        this.sum += value;
        return this;
    }
}

const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum);

const sum2 = new CumulativeSum(10);
console.log(sum2.add(10).add(20).add(5).sum);
