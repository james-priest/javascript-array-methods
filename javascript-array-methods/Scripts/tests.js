// removed _references.js
module('JavaScript Array Test Suite', { setup: function () { initialize(); } });

test("'concat' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-concat");
    var result = removeDisplayFormatting(document.getElementById('code0').innerText.trim());
    var expected = arrayMethods[0].code.trim();
    // assert
    equal(result, expected, "Test that 'concat' sample code set in JavaScript matches string displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result0').innerText
    expected = "pizzaParts == ['pepperoni', 'ham', 'bacon', 'pepper', 'onion']";
    equal(result, expected, "Test that result of concat operation returns the expected result");
});

test("'indexOf' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-indexOf");
    var result = removeDisplayFormatting(document.getElementById('code1').innerText.trim());
    var expected = arrayMethods[1].code.trim();
    // assert
    equal(result, expected, "Test that 'indexOf' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result1').innerText
    expected = "baconIndex == 2";
    equal(result, expected, "Test that result of indexOf operation returns the expected result");
});

test("'join' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-join");
    var result = removeDisplayFormatting(document.getElementById('code2').innerText.trim());
    var expected = arrayMethods[2].code.trim();
    // assert
    equal(result, expected, "Test that 'join' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result2').innerText
    expected = 'meatParts == "pepperoni,ham,bacon"';
    equal(result, expected, "Test that result of join operation returns the expected result");
});

test("'lastIndexOf' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-lastIndexOf");
    var result = removeDisplayFormatting(document.getElementById('code3').innerText.trim());
    var expected = arrayMethods[3].code.trim();
    // assert
    equal(result, expected, "Test that 'lastIndexOf' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result3').innerText
    expected = 'lastHamIndex == 3';
    equal(result, expected, "Test that result of lastIndexOf operation returns the expected result");
});

test("'pop' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-pop");
    var result = removeDisplayFormatting(document.getElementById('code4').innerText.trim());
    var expected = arrayMethods[4].code.trim();
    // assert
    equal(result, expected, "Test that 'pop' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result4').innerText
    expected = "pizzaMeatParts == ['pepperoni', 'ham'] lastItem == \"bacon\"";
    equal(result, expected, "Test that result of pop operation returns the expected result");
});

test("'push' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-push");
    var result = removeDisplayFormatting(document.getElementById('code5').innerText.trim());
    var expected = arrayMethods[5].code.trim();
    // assert
    equal(result, expected, "Test that 'push' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result5').innerText
    expected = "pizzaMeatParts == ['pepperoni', 'ham', 'bacon', 'prosciutto'] newLength == 4";
    equal(result, expected, "Test that result of push operation returns the expected result");
});

test("'reverse' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-reverse");
    var result = removeDisplayFormatting(document.getElementById('code6').innerText.trim());
    var expected = arrayMethods[6].code.trim();
    // assert
    equal(result, expected, "Test that 'reverse' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result6').innerText
    expected = "pizzaMeatParts == ['prosciutto', 'bacon', 'ham', 'pepperoni']";
    equal(result, expected, "Test that result of reverse operation returns the expected result");
});

test("'shift' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-shift");
    var result = removeDisplayFormatting(document.getElementById('code7').innerText.trim());
    var expected = arrayMethods[7].code.trim();
    // assert
    equal(result, expected, "Test that 'shift' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result7').innerText
    expected = "firstItem == \"pepperoni\"";
    equal(result, expected, "Test that result of shift operation returns the expected result");
});

test("'slice' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-slice");
    var result = removeDisplayFormatting(document.getElementById('code8').innerText.trim());
    var expected = arrayMethods[8].code.trim();
    // assert
    equal(result, expected, "Test that 'slice' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result8').innerText
    expected = "mySlice == ['ham', 'bacon']";
    equal(result, expected, "Test that result of slice operation returns the expected result");
});

test("'sort' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-sort");
    var result = removeDisplayFormatting(document.getElementById('code9').innerText.trim());
    var expected = arrayMethods[9].code.trim();
    // assert
    equal(result, expected, "Test that 'sort' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result9').innerText
    expected = "pizzaMeatParts == ['bacon', 'ham', 'meatball', 'pepperoni', 'prosciutto']";
    equal(result, expected, "Test that result of sort operation returns the expected result");
});

test("'splice' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-splice");
    var result = removeDisplayFormatting(document.getElementById('code10').innerText.trim());
    var expected = arrayMethods[10].code.trim();
    // assert
    equal(result, expected, "Test that 'splice' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result10').innerText
    expected = "pizzaMeatParts == ['pepperoni', 'spam', 'meatball', 'prosciutto'] mySlice == ['ham', 'bacon']";
    equal(result, expected, "Test that result of splice operation returns the expected result");
});

test("'toString' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-toString");
    var result = removeDisplayFormatting(document.getElementById('code11').innerText.trim());
    var expected = arrayMethods[11].code.trim();
    // assert
    equal(result, expected, "Test that 'toString' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result11').innerText
    expected = 'meatParts == "pepperoni, ham, bacon"';
    equal(result, expected, "Test that result of toString operation returns the expected result");
});

test("'unshift' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-unshift");
    var result = removeDisplayFormatting(document.getElementById('code12').innerText.trim());
    var expected = arrayMethods[12].code.trim();
    // assert
    equal(result, expected, "Test that 'unshift' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result12').innerText
    expected = "pizzaMeatParts == ['prosciutto', 'pepperoni', 'ham', 'bacon'] newLength == 4";
    equal(result, expected, "Test that result of unshift operation returns the expected result");
});

test("'valueOf' method", function () {
    expect(2);

    // arrange
    var btn = document.getElementById("btn-valueOf");
    var result = removeDisplayFormatting(document.getElementById('code13').innerText.trim());
    var expected = arrayMethods[13].code.trim();
    // assert
    equal(result, expected, "Test that 'valueOf' sample code set in JS matches sample code displayed in browser.");

    // act
    QUnit.triggerEvent(btn, 'click');
    // assert
    result = document.getElementById('result13').innerText
    expected = "meatParts == ['pepperoni', 'ham', 'bacon']";
    equal(result, expected, "Test that result of valueOf operation returns the expected result");
});