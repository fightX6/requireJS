/**
	简单包装CommonJS来定义模块
	§ 1.3.5
	如果你现有一些以CommonJS模块格式编写的代码，而这些代码难于使用上述依赖名称数组参数的形式来重构，你可以考虑直接将这些依赖对应到一些本地变量中进行使用。
	你可以使用一个CommonJS的简单包装来实现：
	TODO:不太懂啊！！！！！！！！
*/
define(function(require,exports,module){
	console.debug(require);
	console.debug(exports);
	console.debug(module);
	var a = require('app/app1'),
		b = require('app/app2');

	return function(){
		return {
			app1:a,
			app2:b
		}	
	}
});
/**
	该包装方法依靠Function.prototype.toString()将函数内容赋予一个有意义的字串值，但在一些设备如PS3及一些老的Opera手机浏览器中不起作用。
	考虑在这些设备上使用优化器将依赖导出为数组形式。更多的信息可参看CommonJS Notes页面，以及"Why AMD"页面的"Sugar"段落。
*/