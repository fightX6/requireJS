/**
	Undefining a Module
	§ 1.3.10
	有一个全局函数requirejs.undef()用来undefine一个模块。它会重置loader的内部状态以使其忘记之前定义的一个模块。
	但是若有其他模块已将此模块作为依赖使用了，该模块就不会被清除，所以该功能仅在无其他模块持有该模块时的错误处理中，
	或者当未来需要加载该模块时有点用。参见备错(errbacks)段的示例。
	如果你打算在undefine时做一些复杂的依赖图分析，则半私有的onResourceLoad API可能对你有用。
*/