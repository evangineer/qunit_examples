/*global test, isEven, expect, ok, equals, same*/


module('Synchronous Tests');
test('isEven()', function () {
    expect(6);
    ok(isEven(0), 'Zero is an even number');
    ok(isEven(2), 'So is two');
    ok(isEven(-4), 'So is negative four');
    ok(!isEven(1), 'One is not an even number');
    ok(!isEven(-7), 'Neither is negative seven');

    // Fails
    ok(isEven(3), 'Three is an even number');
});


test('comparison assertions', function () {
    expect(2);
    equals(1, 1, 'one equals one');

    // Fails
    equals(2, 1, 'two equals one');
});


test('identical assertions', function () {
    expect(4);
    same({}, {}, 'passes, objects have the same content');
    same({a: 1}, {a: 1}, 'passes');
    same([], [], 'passes, arrays have the same content');
    same([1], [1], 'passes');
});


// Beware the JavaScript pitfalls, prefer same over equals unless you have a good reason to do otherwise
// http://www.mapbender.org/JavaScript_pitfalls:_null,_false,_undefined,_NaN
test('special value comparisons', function () {
    expect(12);
    equals(0, false, 'zero is equal to false');
    // Fails
    same(0, false, 'zero is identical to false');

    equals("", false, 'empty string is equal to false');
    // Fails
    same("", false, 'empty string is identical to false');

    // Both fail
    equals(null, false, 'null is equal to false');
    same(null, false, 'null is identical to false');

    // Both fail
    equals(undefined, false, 'undefined is equal to false');
    same(undefined, false, 'undefined is identical to false');

    equals(null, undefined, 'null is equal to undefined');
    // Fails
    same(null, undefined, 'null is identical to undefined');

    var x = 10 / "seventeen";
    // Fails
    equals(x, NaN, 'NaN is equal to NaN');
    same(x, NaN, 'NaN is identical to NaN');
});




