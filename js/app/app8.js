/** 
	循环依赖
	§ 1.3.8
	I如果你定义了一个循环依赖(a依赖b，b同时依赖a)，则在这种情形下当b的模块函数被调用的时候，它会得到一个undefined的a。b可以在模块已经定义好后用require()方法再获取(记得将require作为依赖注入进来)：
	//Inside b.js:
	define(["require", "a"],
	    function(require, a) {
	        //"a" in this case will be null if a also asked for b,
	        //a circular dependency.
	        return function(title) {
	            return require("a").doSomething();
	        }
	    }
	);
	一般说来你无需使用require()去获取一个模块，而是应当使用注入到模块函数参数中的依赖。循环依赖比较罕见，它也是一个重构代码重新设计的警示灯。但不管怎样，有时候还是要用到循环依赖，这种情形下就使用上述的require()方式来解决。
	如果你熟悉CommonJS，你可以考虑使用exports为模块建立一个空object，该object可以立即被其他模块引用。在循环依赖的两头都如此操作之后，你就可以安全地持有其他模块了。这种方法仅在每个模块都是输出object作为模块值的时候有效，换成函数无效。
	//Inside b.js:
	define(function(require, exports, module) {
	    //If "a" has used exports, then we have a real
	    //object reference here. However, we cannot use
	    //any of a's properties until after b returns a value.
	    var a = require("a");

	    exports.foo = function () {
	        return a.bar();
	    };
	});
	或者，如果你使用依赖注入数组的步骤，则可用注入特殊的"exports"来解决：
	//Inside b.js:
	define(['a', 'exports'], function(a, exports) {
	    //If "a" has used exports, then we have a real
	    //object reference here. However, we cannot use
	    //any of a's properties until after b returns a value.

	    exports.foo = function () {
	        return a.bar();
	    };
	});

	TODO:不太懂啊！！！！！！！！
*/