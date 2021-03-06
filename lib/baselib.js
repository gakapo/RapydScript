function ՐՏ_Iterable(iterable) {
    var ՐՏ_Temp;
    if (Array.isArray(iterable) || iterable instanceof String || typeof iterable === "string") {
        return iterable;
    }
    return Object.keys(iterable);
}
function ՐՏ_bind(fn, thisArg) {
    var ՐՏ_Temp, fn, ret;
    if (fn.orig) {
        fn = fn.orig;
    }
    if (thisArg === false) {
        return fn;
    }
    ret = function() {
        var ՐՏ_Temp;
        return fn.apply(thisArg, arguments);
    };
    ret.orig = fn;
    return ret;
}
function range(start, stop, step) {
    var ՐՏ_Temp, stop, start, step, length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function len(obj) {
    var ՐՏ_Temp;
    if (typeof obj.indexOf === "function") {
        return obj.length;
    }
    return Object.keys(obj).length;
}
function ՐՏ_in(val, arr) {
    var ՐՏ_Temp;
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    }
    return arr.hasOwnProperty(val);
}
function dir(item) {
    var ՐՏ_Temp, arr;
    arr = [];
    for (var i in item) {
        arr.push(i);
    }
    return arr;
}
function ՐՏ_extends(child, parent) {
    var ՐՏ_Temp;
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}
function abs(n) {
    var ՐՏ_Temp;
    return Math.abs(n);
}
function all(a) {
    var ՐՏ_Temp, e;
    var ՐՏ_Iter0 = ՐՏ_Iterable(a);
    for (var ՐՏ_Index0 = 0; ՐՏ_Index0 < ՐՏ_Iter0.length; ՐՏ_Index0++) {
        e = ՐՏ_Iter0[ՐՏ_Index0];
        if (!e) {
            return false;
        }
    }
    return true;
}
function any(a) {
    var ՐՏ_Temp, e;
    var ՐՏ_Iter1 = ՐՏ_Iterable(a);
    for (var ՐՏ_Index1 = 0; ՐՏ_Index1 < ՐՏ_Iter1.length; ՐՏ_Index1++) {
        e = ՐՏ_Iter1[ՐՏ_Index1];
        if (e) {
            return true;
        }
    }
    return false;
}
function bin(a) {
    var ՐՏ_Temp;
    return "0b" + (a >>> 0).toString(2);
}
function ՐՏ_rebindAll(thisArg, rebind) {
    var ՐՏ_Temp, rebind;
    if (rebind === undefined) {
        rebind = true;
    }
    for (var p in thisArg) {
        if (thisArg[p] && thisArg[p].orig) {
            if (rebind) {
                thisArg[p] = ՐՏ_bind(thisArg[p], thisArg);
            } else {
                thisArg[p] = thisArg[p].orig;
            }
        }
    }
}
function cmp(a, b) {
    var ՐՏ_Temp;
    return a < b ? -1 : a > b ? 1 : 0;
}
chr = String.fromCharCode;
function enumerate(item) {
    var ՐՏ_Temp, arr, i;
    arr = [];
    for (i = 0; i < len(item); i++) {
        arr[arr.length] = [ i, item[i] ];
    }
    return arr;
}
function ՐՏ_eslice(arr, step, start, end) {
    var ՐՏ_Temp, arr, isString, step, start, end;
    arr = arr.slice(0);
    if (typeof arr === "string" || arr instanceof String) {
        isString = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr.reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter(function(e, i) {
        var ՐՏ_Temp;
        return i % step === 0;
    });
    return isString ? arr.join("") : arr;
}
function filter(oper, arr) {
    var ՐՏ_Temp;
    return arr.filter(oper);
}
function hex(a) {
    var ՐՏ_Temp;
    return "0x" + (a >>> 0).toString(16);
}
function map(oper, arr) {
    var ՐՏ_Temp;
    return arr.map(oper);
}
function max(a) {
    var ՐՏ_Temp;
    if (Array.isArray(a)) {
        return Math.max.apply(null, a);
    } else {
        return Math.max.apply(null, arguments);
    }
}
function min(a) {
    var ՐՏ_Temp;
    if (Array.isArray(a)) {
        return Math.min.apply(null, a);
    } else {
        return Math.min.apply(null, arguments);
    }
}
function ՐՏ_mixin(target, source, overwrite) {
    var ՐՏ_Temp;
    for (var i in source) {
        if (source.hasOwnProperty(i) && (overwrite || typeof target[i] === "undefined")) {
            target[i] = source[i];
        }
    }
    for (var i in source.prototype) {
        if (source.prototype.hasOwnProperty(i) && (overwrite || typeof target.prototype[i] === "undefined")) {
            target.prototype[i] = source.prototype[i];
        }
    }
}
function ՐՏ_print() {
    var ՐՏ_Temp;
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}
function reduce(f, a) {
    var ՐՏ_Temp;
    return Array.prototype.reduce.call(a, f);
}
function reversed(arr) {
    var ՐՏ_Temp, tmp;
    tmp = arr.slice(0);
    return tmp.reverse();
}
function sorted(arr) {
    var ՐՏ_Temp, tmp;
    tmp = arr.slice(0);
    return tmp.sort();
}
function sum(arr, start) {
    start = start === undefined ? 0 : start;
    var ՐՏ_Temp;
    return arr.reduce(function(prev, cur) {
        var ՐՏ_Temp;
        return prev + cur;
    }, start);
}
function zip(a, b) {
    var ՐՏ_Temp, i;
    return (function() {
        var ՐՏ_Iter = ՐՏ_Iterable(range(Math.min(a.length, b.length))), ՐՏ_Result = [], i;
        for (var ՐՏ_Index = 0; ՐՏ_Index < ՐՏ_Iter.length; ՐՏ_Index++) {
            i = ՐՏ_Iter[ՐՏ_Index];
            ՐՏ_Result.push([ a[i], b[i] ]);
        }
        return ՐՏ_Result;
    })();
}
function getattr(obj, name) {
    var ՐՏ_Temp;
    return obj[name];
}
function setattr(obj, name, value) {
    var ՐՏ_Temp;
    obj[name] = value;
}
function hasattr(obj, name) {
    var ՐՏ_Temp;
    return name in obj;
}
function ՐՏ_eq(a, b) {
    var ՐՏ_Temp, i;
    "\n    Equality comparison that works with all data types, returns true if structure and\n    contents of first object equal to those of second object\n\n    Arguments:\n        a: first object\n        b: second object\n    ";
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < len(a); i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            var ՐՏ_Iter2 = ՐՏ_Iterable(a);
            for (var ՐՏ_Index2 = 0; ՐՏ_Index2 < ՐՏ_Iter2.length; ՐՏ_Index2++) {
                i = ՐՏ_Iter2[ՐՏ_Index2];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
function kwargs(f) {
    var ՐՏ_Temp, argNames;
    argNames = f.toString().match(/\(([^\)]+)/)[1];
    if (!kwargs.memo[argNames]) {
        kwargs.memo[argNames] = argNames ? argNames.split(",").map(function(s) {
            var ՐՏ_Temp;
            return s.trim();
        }) : [];
    }
    argNames = kwargs.memo[argNames];
    return function() {
        var ՐՏ_Temp, args, kw, i;
        args = [].slice.call(arguments);
        if (args.length) {
            kw = args[args.length-1];
            if (typeof kw === "object") {
                for (i = 0; i < argNames.length; i++) {
                    if (ՐՏ_in(argNames[i], dir(kw))) {
                        args[i] = kw[argNames[i]];
                    }
                }
            } else {
                args.push(kw);
            }
        }
        return f.apply(this, args);
    };
}
kwargs.memo = {};
function AssertionError() {
    AssertionError.prototype.__init__.apply(this, arguments);
}
ՐՏ_extends(AssertionError, Error);
AssertionError.prototype.__init__ = function __init__(message){
    var self = this;
    var ՐՏ_Temp;
    self.name = "AssertionError";
    self.message = message;
};

function IndexError() {
    IndexError.prototype.__init__.apply(this, arguments);
}
ՐՏ_extends(IndexError, Error);
IndexError.prototype.__init__ = function __init__(message){
    var self = this;
    var ՐՏ_Temp;
    self.name = "IndexError";
    self.message = message;
};

function KeyError() {
    KeyError.prototype.__init__.apply(this, arguments);
}
ՐՏ_extends(KeyError, Error);
KeyError.prototype.__init__ = function __init__(message){
    var self = this;
    var ՐՏ_Temp;
    self.name = "KeyError";
    self.message = message;
};

function TypeError() {
    TypeError.prototype.__init__.apply(this, arguments);
}
ՐՏ_extends(TypeError, Error);
TypeError.prototype.__init__ = function __init__(message){
    var self = this;
    var ՐՏ_Temp;
    self.name = "TypeError";
    self.message = message;
};

function ValueError() {
    ValueError.prototype.__init__.apply(this, arguments);
}
ՐՏ_extends(ValueError, Error);
ValueError.prototype.__init__ = function __init__(message){
    var self = this;
    var ՐՏ_Temp;
    self.name = "ValueError";
    self.message = message;
};

