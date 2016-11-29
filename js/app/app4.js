/**
	将模块定义为一个函数
	§ 1.3.4
	对模块的返回值类型并没有强制为一定是个object，任何函数的返回值都是允许的。此处是一个返回了函数的模块定义：
*/
define(['app/app1','app/app2'],function(app1,app2){
	return function(title){
		return title ? 'title>>>>>>>' + (whidow.title = title) : 'title>>>>>>>' +  app1.color + '---' + app2.num ;
	}
});