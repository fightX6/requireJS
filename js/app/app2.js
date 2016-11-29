
/**
	函数式定义 
	§ 1.3.2
	如果一个模块没有任何依赖，但需要一个做setup工作的函数，则在define()中定义该函数，并将其传给define()：
*/
define(function(){
	return {
		num:100*10022
	}
});