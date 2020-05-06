
test("function composition", assert => {

    const plusOne  = x => x + 1;
    const timesTwo = x => x * 2;

    // prozedural
    const plusOneTimesTwo = x => {
        const y = plusOne(x);
        const z = timesTwo(y);
        return z;
    }
    const plusOneTimesTwo2 = x => timesTwo(plusOne(x));

    Function.prototype.then = function(fn) {
        return x => fn(this(x));
    };

    const plusOneTimesTwo3 = plusOne.then(timesTwo);

    assert.equals(plusOneTimesTwo(1) , 4);
    assert.equals(plusOneTimesTwo2(1), 4);
    assert.equals(plusOneTimesTwo3(1), 4);
})
