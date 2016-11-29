/**
	【一个文件一个模块】: 每个Javascript文件应该只定义一个模块，这是模块名-至-文件名查找机制的自然要求。
	多个模块会被优化工具组织优化，但你在使用优化工具时应将多个模块放置到一个文件中。
*/

/**
	【define()中的相对模块名】: 为了可以在define()内部使用诸如require("./relative/name")的调用以正确解析相对名称，记得将"require"本身作为一个依赖注入到模块中：
	define(["require", "./relative/name"], function(require) {
	    var mod = require("./relative/name");
	});
	或者更好地，使用下述为转换CommonJS模块所设的更短的语法：
	define(function(require) {
	    var mod = require("./relative/name");
	});
	相对路径在一些场景下格外有用，例如：为了以便于将代码共享给其他人或项目，你在某个目录下创建了一些模块。你可以访问模块的相邻模块，无需知道该目录的名称。
*/

/**
	【生成相对于模块的URL地址】: 你可能需要生成一个相对于模块的URL地址。你可以将"require"作为一个依赖注入进来，然后调用require.toUrl()以生成该URL:
	define(["require"], function(require) {
	    var cssUrl = require.toUrl("./style.css");
	});
*/

/**
	【控制台调试】:如果你需要处理一个已通过require(["module/name"], function(){})调用加载了的模块，可以使用模块名作为字符串参数的require()调用来获取它:
	require("module/name").callSomeFunction()
	注意这种形式仅在"module/name"已经由其异步形式的require(["module/name"])加载了后才有效。只能在define内部使用形如"./module/name"的相对路径。
*/