
test("play with monads", assert => {

    const inc      = n => n+1;
    const timesTwo = n => n * 2;

    // function composition
    const firstAndThen = f => g => n => g(f(n));
    const incAndDouble = firstAndThen(inc)(timesTwo);

    // "chaining"   fn <> fn
    //              \      /
    //                 fn
    // monoid
    // lego brick
    Function.prototype.then = function(g){ return x => {
        const t = this(x); // <- "programmable semicolon"
        // add your "aspect", "context"
        return g(t);
    } };

    const plusThree = (inc)         // let a = inc(x);
                      .then(inc)    // let b = inc(a);
                      .then(inc)    // return  inc(b)

    const abs = (x => x * x)
                .then(a => Math.sqrt(a))


    // monad: compose functions in a monoidal fashion
    // in the combination (where the semicolon was) we can
    //    produce a side effect (like console log)
    //    put in additional constraints, safe guards (even, not null, ..)
    //    async calls, "cooperative concurrency", Promise
    //    ...
    // all this without touching the "application code". -> "aspect"

    // const incAndDouble = n => timesTwo(inc(n));


    assert.equals(incAndDouble(1), 4);
    assert.equals(incAndDouble(2), 6);
    assert.equals(plusThree(2), 5);
    assert.equals(abs(2), 2);
    assert.equals(abs(-2), 2);
})
