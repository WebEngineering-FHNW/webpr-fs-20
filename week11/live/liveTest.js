
test("function composition", assert => {

    const plusOne  = x => x + 1;
    const timesTwo = x => x * 2;

    // prozedural
    const plusOneTimesTwo = x => {
        const y = plusOne(x);
        const z = timesTwo(y);
        return z;
    }

    assert.equals(plusOneTimesTwo(1), 4);
})
