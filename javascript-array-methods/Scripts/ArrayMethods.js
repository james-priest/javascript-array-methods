/// <reference path="_references.js" />

var js = [];
var evtHandler = ['concat', 'indexOf', 'join', 'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'slice', 'sort', 'splice', 'toString', 'unshift', 'valueOf'];

js[0] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var pizzaVegetableParts = ['pepper', 'onion'];"
    + "var pizzaParts = pizzaMeatParts.concat(pizzaVegetableParts);";
js[1] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var baconIndex = pizzaMeatParts.indexOf('bacon');";
js[2] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var meatParts = pizzaMeatParts.join();";
js[3] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'ham', 'prosciutto'];"
    + "var lastHamIndex = pizzaMeatParts.lastIndexOf('ham');";
js[4] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var lastItem = pizzaMeatParts.pop();";
js[5] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var newLength = pizzaMeatParts.push('prosciutto');";
js[6] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'prosciutto'];"
    + "pizzaMeatParts.reverse();";
js[7] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var firstItem = pizzaMeatParts.shift();";
js[8] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
    + "var mySlice = pizzaMeatParts.slice(1,3);";
js[9] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
    + "pizzaMeatParts.sort();";
js[10] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
    + "var mySlice = pizzaMeatParts.splice(1,2,'spam');";
js[11] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var meatParts = pizzaMeatParts.toString();";
js[12] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var newLength = pizzaMeatParts.unshift('prosciutto');";
js[13] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
    + "var meatParts = pizzaMeatParts.valueOf();";

/*
 * object to hold code
 * method: concat
 * variable: pizzaMeatParts
 * expression: ['pepperoni', 'ham', 'bacon']
 */
//var sampleCode = [
//    { 'method': 'concat', 'variable': 'pizzaMeatParts', 'expression': "['pepperoni', 'ham', 'bacon'];" },
//    { 'method': 'concat', 'variable': 'pizzaVegetableParts', 'expression': "['pepper', 'onion'];" },
//    { 'method': 'concat', 'variable': 'pizzaParts', 'expression': 'pizzaMeatParts.concat(pizzaVegetableParts);' },
//    { 'method': 'indexOf', 'variable': 'pizzaMeatParts', 'expression': "['pepperoni', 'ham', 'bacon'];" },
//    { 'method': 'indexOf', 'variable': 'baconIndex', 'expression': "pizzaMeatParts.indexOf('bacon');" }
//]


function initialize() {
    for (var i = 0; i < js.length; i++) {
        var codeElement = document.getElementById('code' + i);
        addDisplayFormatting(codeElement, i);
  
        var btn = document.getElementById('btn-' + evtHandler[i]);
        btn.addEventListener('click', eval(evtHandler[i] + 'Code'), false);
    }
}

function addDisplayFormatting(codeElement, counter) {
    codeElement.innerHTML = js[counter].replace(/;/g, ';\n');
}

function removeDisplayFormatting(codeSnippet) {
    return codeSnippet.replace(/; /g, ';');
}

function formatResultsforDisplay(resultString,resultLocationDivID) {
    var result = document.getElementById(resultLocationDivID);
    result.className = "prettyprint";
    result.innerHTML = resultString;
    prettyPrint();
}


/* Method Handlers for click events */
function concatCode(e) {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var pizzaVegetablesParts = ['pepper', 'onion'];
    //var pizzaParts = pizzaMeatParts.concat(pizzaVegetablesParts);

    eval(js[0]);

    formatResultsforDisplay("pizzaParts == ['" + pizzaParts.join("', '") + "']", 'result0');
}
 
function indexOfCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var baconIndex = pizzaMeatParts.indexOf('bacon');

    eval(js[1]);

    formatResultsforDisplay('baconIndex == ' + baconIndex.toString(), 'result1');
}

function joinCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var meatParts = pizzaMeatParts.join();

    eval(js[2]);

    formatResultsforDisplay('meatParts == "' + meatParts.toString() + '"', 'result2');
}

function lastIndexOfCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'ham', 'prosciutto'];
    //var lastHamIndex = pizzaMeatParts.lastIndexOf('ham');

    eval(js[3]);

    formatResultsforDisplay('lastHamIndex == ' + lastHamIndex.toString(), 'result3');
}

function popCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var lastItem = pizzaMeatParts.pop();

    eval(js[4]);

    var resultString = "pizzaMeatParts == ['pepperoni', 'ham']" + '\n';
    resultString += 'lastItem == "' + lastItem.toString() + '"';
    formatResultsforDisplay(resultString, 'result4');
}

function pushCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var newLength = pizzaMeatParts.push('prosciutto');

    eval(js[5]);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += 'newLength == ' + newLength.toString();
    formatResultsforDisplay(resultString, 'result5');
}

function reverseCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'prosciutto'];
    //pizzaMeatParts.reverse();

    eval(js[6]);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result6');
}

function shiftCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var firstItem = pizzaMeatParts.shift();
    var linesOfCode = js[7];

    //runtimeExecuteJSCode(linesOfCode)();
    var abc = runtimeExecuteJSCode(linesOfCode);
    var myVar = abc();
    //var result = myVar();
    //var resultString = 'firstItem == "' + firstItem + '"';
    var resultString = 'firstItem == "' + myVar + '"';
    formatResultsforDisplay(resultString, 'result7');
}

var runtimeExecuteJSCode = function (linesOfCode) {
    return function () {
        eval(linesOfCode);
        return firstItem;
    }
};
//var runtimeExecuteJSCode = function (linesOfCode) {
//    return function () {
//        //eval(linesOfCode);
//        return function () { eval(linesOfCode);};
//    }
//};
function runtimeExecuteJSCodeFunc(linesOfCode) {
    eval(linesOfCode);
}

 
function sliceCode() {
    eval(js[8]);

    var resultString = "mySlice == ['" + mySlice.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result8');
}
function sortCode() {
    eval(js[9]);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result9');
}
function spliceCode() {
    eval(js[10]);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += "mySlice == ['" + mySlice.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result10');
}
function toStringCode() {
    eval(js[11]);

    var resultString = 'meatParts == "' + meatParts.replace(/,/g, ', ') + '"';
    formatResultsforDisplay(resultString, 'result11');
}
function unshiftCode() {
    eval(js[12]);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += "newLength == " + newLength.toString();
    formatResultsforDisplay(resultString, 'result12');
}
function valueOfCode() {
    eval(js[13]);

    var resultString = "meatParts == ['" + meatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result13');
}