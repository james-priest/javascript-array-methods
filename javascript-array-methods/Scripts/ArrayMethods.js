// removed _references.js

//var js = [], funcDesc = [];
//var evtHandler = ['concat', 'indexOf', 'join', 'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'slice', 'sort', 'splice', 'toString', 'unshift', 'valueOf'];
//var evtHandlerObj = {
//    0: "concat",
//    1: 'indexOf',
//    2: 'join',
//    3: 'lastIndexOf',
//    4: 'pop',
//    5: 'push',
//    6: 'reverse',
//    7: 'shift',
//    8: 'slice',
//    9: 'sort',
//    10: 'splice',
//    11: 'toString',
//    12: 'unshift',
//    13: 'valueOf'
//};

// this is done as a shortcut to avoid recoding all click handler methods and test methods
// arrayObj.arrayMethods is assigned to arrayMethods object after declaration of arrayObj
var arrayMethods = {};

var arrayObj = {
    arrayMethods: {
        0: {
            name: "concat",
            desc: "Joins two or more arrays and returns a new array with all the items.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var pizzaVegetableParts = ['pepper', 'onion'];"
                + "var pizzaParts = pizzaMeatParts.concat(pizzaVegetableParts);"
        },
        1: {
            name: "indexOf",
            desc: "Locates the item in the array and returns its index.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var baconIndex = pizzaMeatParts.indexOf('bacon');"
        },
        2: {
            name: "join",
            desc: "Creates a string from the items in the array. The items are comma-delimited by default, "
                + "but you can pass an alternate separator.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var meatParts = pizzaMeatParts.join();"
        },
        3: {
            name: "lastIndexOf",
            desc: "Searches from the end of the array for the last item in the array "
                + "that meets the search criteria and returns its index.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'ham', 'prosciutto'];"
                + "var lastHamIndex = pizzaMeatParts.lastIndexOf('ham');"
        },
        4: {
            name: "pop",
            desc: "Removes and returns the last element of the array. This reduces the "
                + "length of the array by one.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var lastItem = pizzaMeatParts.pop();"
        },
        5: {
            name: "push",
            desc: "Adds a new item to the end of an array and returns the new length.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var newLength = pizzaMeatParts.push('prosciutto');"
        },
        6: {
            name: "reverse",
            desc: "Reverses the order of the items in an array and returns a reference "
                + "(not a new array) to the reversed array, so the original array is modified.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'prosciutto'];"
                + "pizzaMeatParts.reverse();"
        },
        7: {
            name: "shift",
            desc: "Removes and returns the first item in the array. If no items are in the "
                + "array, the return value is undefined.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var firstItem = pizzaMeatParts.shift();"
        },
        8: {
            name: "slice",
            desc: "Returns a <strong>new</strong> array that represents part of the existing array. The slice method has two parameters: "
                + "<em>start</em> and <em>end</em>. The start parameter is the index of the first item to include in the result. The end "
                + "parameter is the index of the item that you don't want included in the result.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
                + "var mySlice = pizzaMeatParts.slice(1,3);"
        },
        9: {
            name: "sort",
            desc: "Sorts the items in an array and returns a reference to the array. The original array is modified.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
                + "pizzaMeatParts.sort();"
        },
        10: {
            name: "splice",
            desc: "Adds and removes items from an array and returns the removed items. The original array is modified to "
                + "contain the result. The splice method's first parameter is the starting index of where to start adding or deleting. "
                + "The second parameter indicates how many items to remove. If 0 is passed as the second parameter, no items are removed. "
                + "If the second parameter is larger that the quantity of items available for removal, all items from the starting index "
                + "to the end of the array are removed. After the first two parameters, you can specify as many items as you want to add.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
                + "var mySlice = pizzaMeatParts.splice(1,2,'spam');"
        },
        11: {
            name: "toString",
            desc: "All objects have a toString method. For the Array object, toString creates a string from the items in the array."
                + "The items are comma-delimited, but if you want a different delimiter, you can use the join method and specify an"
                + "alternate separator.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var meatParts = pizzaMeatParts.toString();"
        },
        12: {
            name: "unshift",
            desc: "Adds a new item to the beginning of an array and returns the new length.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var newLength = pizzaMeatParts.unshift('prosciutto');"
        },
        13: {
            name: "valueOf",
            desc: "All objects have a valueOf method. For the Array object, valueOf returns the array.",
            code: "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
                + "var meatParts = pizzaMeatParts.valueOf();"
        },
    },
    count: function () {
        return Object.keys(this.arrayMethods).length;
    }
};

// now that arrayObj exists and is declared we can assign it to empty arrayMethods object
arrayMethods = arrayObj.arrayMethods;


//js[0] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//            + "var pizzaVegetableParts = ['pepper', 'onion'];"
//            + "var pizzaParts = pizzaMeatParts.concat(pizzaVegetableParts);";
//js[1] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//            + "var baconIndex = pizzaMeatParts.indexOf('bacon');";
//js[2] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//            + "var meatParts = pizzaMeatParts.join();";
//js[3] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'ham', 'prosciutto'];"
//            + "var lastHamIndex = pizzaMeatParts.lastIndexOf('ham');";
//js[4] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var lastItem = pizzaMeatParts.pop();";
//js[5] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var newLength = pizzaMeatParts.push('prosciutto');";
//js[6] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'prosciutto'];"
//    + "pizzaMeatParts.reverse();";
//js[7] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var firstItem = pizzaMeatParts.shift();";
//js[8] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
//    + "var mySlice = pizzaMeatParts.slice(1,3);";
//js[9] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
//    + "pizzaMeatParts.sort();";
//js[10] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];"
//    + "var mySlice = pizzaMeatParts.splice(1,2,'spam');";
//js[11] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var meatParts = pizzaMeatParts.toString();";
//js[12] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var newLength = pizzaMeatParts.unshift('prosciutto');";
//js[13] = "var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];"
//    + "var meatParts = pizzaMeatParts.valueOf();";

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
    for (var i = 0; i < arrayObj.count(); i++) {
        var codeElement = document.getElementById('code' + i);
        addDisplayFormatting(codeElement, i);
  
        //var btn = document.getElementById('btn-' + evtHandler[i]);
        var btn = document.getElementById('btn-' + arrayObj.arrayMethods[i].name);
        //btn.addEventListener('click', eval(evtHandler[i] + 'Code'), false); // change this to use string subscripts
        //btn.addEventListener('click', window[evtHandlerObj[i] + "Code"], false);
        btn.addEventListener('click', window[arrayObj.arrayMethods[i].name + "Code"], false);

        // var evtHandlerObj = {0:'concat', 1:'indexOf', 2:'join'}; // to this up top
        // var dynamicProp = i;
        // evtHandlerObj[dynamicProp];
        // see answer http://stackoverflow.com/questions/16037033/alternative-to-eval-javascript
    }
}

function addDisplayFormatting(codeElement, counter) {
    codeElement.innerHTML = arrayObj.arrayMethods[counter].code.replace(/;/g, ';\n');
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

    //eval(js[0]);
    eval(arrayMethods[0].code);

    formatResultsforDisplay("pizzaParts == ['" + pizzaParts.join("', '") + "']", 'result0');
}
 
function indexOfCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var baconIndex = pizzaMeatParts.indexOf('bacon');

    //eval(js[1]);
    eval(arrayMethods[1].code);

    formatResultsforDisplay('baconIndex == ' + baconIndex.toString(), 'result1');
}

function joinCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var meatParts = pizzaMeatParts.join();

    //eval(js[2]);
    eval(arrayMethods[2].code);

    formatResultsforDisplay('meatParts == "' + meatParts.toString() + '"', 'result2');
}

function lastIndexOfCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'ham', 'prosciutto'];
    //var lastHamIndex = pizzaMeatParts.lastIndexOf('ham');

    //eval(js[3]);
    eval(arrayMethods[3].code);

    formatResultsforDisplay('lastHamIndex == ' + lastHamIndex.toString(), 'result3');
}

function popCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var lastItem = pizzaMeatParts.pop();

    //eval(js[4]);
    eval(arrayMethods[4].code);

    var resultString = "pizzaMeatParts == ['pepperoni', 'ham']" + '\n';
    resultString += 'lastItem == "' + lastItem.toString() + '"';
    formatResultsforDisplay(resultString, 'result4');
}

function pushCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var newLength = pizzaMeatParts.push('prosciutto');

    //eval(js[5]);
    eval(arrayMethods[5].code);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += 'newLength == ' + newLength.toString();
    formatResultsforDisplay(resultString, 'result5');
}

function reverseCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'prosciutto'];
    //pizzaMeatParts.reverse();

    //eval(js[6]);
    eval(arrayMethods[6].code);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result6');
}

function shiftCode() {
    // run sample code
    //var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
    //var firstItem = pizzaMeatParts.shift();
    //var linesOfCode = js[7];
    eval(arrayMethods[7].code);

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
    //eval(js[8]);
    eval(arrayMethods[8].code);

    var resultString = "mySlice == ['" + mySlice.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result8');
}
function sortCode() {
    //eval(js[9]);
    eval(arrayMethods[9].code);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result9');
}
function spliceCode() {
    //eval(js[10]);
    eval(arrayMethods[10].code);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += "mySlice == ['" + mySlice.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result10');
}
function toStringCode() {
    //eval(js[11]);
    eval(arrayMethods[11].code);

    var resultString = 'meatParts == "' + meatParts.replace(/,/g, ', ') + '"';
    formatResultsforDisplay(resultString, 'result11');
}
function unshiftCode() {
    //eval(js[12]);
    eval(arrayMethods[12].code);

    var resultString = "pizzaMeatParts == ['" + pizzaMeatParts.join("', '") + "']\n";
    resultString += "newLength == " + newLength.toString();
    formatResultsforDisplay(resultString, 'result12');
}
function valueOfCode() {
    //eval(js[13]);
    eval(arrayMethods[13].code);

    var resultString = "meatParts == ['" + meatParts.join("', '") + "']";
    formatResultsforDisplay(resultString, 'result13');
}