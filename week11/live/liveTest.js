
test("function composition", assert => {

    // prozedural
    const plusOneTimesTwo = x => {
        const y = x + 1;
        const z = y * 2;
        return z;
    }

    assert.equals(plusOneTimesTwo(1), 4);
})
