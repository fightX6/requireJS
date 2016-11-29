//RequireJS默认是"baseUrl + paths"的解析过程  RequireJS默认假定所有的依赖资源都是js脚本，因此无需在module ID上再加".js"后缀，
//RequireJS在进行module ID到path的解析时会自动补上后缀
/**
    baseUrl ：所有模块的查找根路径。所以上面的示例中，"my/module"的标签src值是"/another/path/my/module.js"。
              当加载纯.js文件(依赖字串以/开头，或者以.js结尾，或者含有协议)，不会使用baseUrl。因此a.js及b.js都在包含上述代码段的HTML页面的同目录下加载。
              如未显式设置baseUrl，则默认值是加载require.js的HTML所处的位置。如果用了data-main属性，则该路径就变成baseUrl。
              baseUrl可跟require.js页面处于不同的域下，RequireJS脚本的加载是跨域的。
              唯一的限制是使用text! plugins加载文本内容时，这些路径应跟页面同域，至少在开发时应这样。
              优化工具会将text! plugin资源内联，因此在使用优化工具之后你可以使用跨域引用text! plugin资源的那些资源。
    paths   ：path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的，除非该path设置以"/"开头或含有URL协议（如http:）。
              在上述的配置下，"some/module"的script标签src值是"/another/path/some/v1.0/module.js"。
              用于模块名的path不应含有.js后缀，因为一个path有可能映射到一个目录。路径解析机制会自动在映射模块名到path时添加上.js后缀。
              在文本模版之类的场景中使用require.toUrl()时它也会添加合适的后缀。
              在浏览器中运行时，可指定路径的备选(fallbacks)，以实现诸如首先指定了从CDN中加载，一旦CDN加载失败则从本地位置中加载这类的机制。
    shim    : 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
*/ 
require.config({
    //指定任何模块的代码默认都从"js"目录中加载
    baseUrl: 'js', 
    //用于模块名的path不应含有.js后缀，因为一个path有可能映射到一个目录。路径解析机制会自动在映射模块名到path时添加上.js后缀。在文本模版之类的场景中使用require.toUrl()时它也会添加合适的后缀。
    //此外，指定模块名称以main开头的都会从"../app"目录(即"js/app"目录)中读取。
    //paths配置的路径是相对于baseUrl的路径
    //注意：有时候你想避开"baseUrl + paths"的解析过程，而是直接指定加载某一个目录下的脚本。
    // 此时可以这样做：如果一个module ID符合下述规则之一，其ID解析会避开常规的"baseUrl + paths"配置，而是直接将其加载为一个相对于当前HTML文档的脚本：
    // 以 ".js" 结束.
    // 以 "/" 开始.
    // 包含 URL 协议, 如 "http:" or "https:".
    paths: {
        app: 'app',
        lib: 'lib/requirejs-plugins',
        jquery: 'lib/jquery.min' 
    }
});
require.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};
// 开始 main 应用逻辑  使用
require(['lib/domReady','jquery','app/app1'  ], function(domReady,$,app1 ) { 
    //loaded and can be used here now. 
    console.log('app/app1' );
    console.debug('app1:'); 
    console.debug(app1);  
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+
												'app1:'+ JSON.stringify(app1) +
										'	</span>'+
										'</code>'+
									'</pre>');	
    });
    console.debug('------------------------------------------------------------');  
});

require(['lib/domReady','jquery','app/app2'  ], function(domReady,$,app2 ) { 
    //loaded and can be used here now. 
    console.log('app/app2' );
    console.debug('app2:'); 
    console.debug(app2);  
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+
												'app2:'+ JSON.stringify(app2) +
										'	</span>'+
										'</code>'+
									'</pre>');	
    });
    console.debug('------------------------------------------------------------');  
});

require(['lib/domReady','jquery','app/app1','app/app2'  ], function(domReady,$,app1,app2 ) { 
    //loaded and can be used here now. 
    console.log('app/app1 --  -- app/app2'); 
    console.debug('app1:'); 
    console.debug(app1); 
    console.debug('app2:'); 
    console.debug(app2); 
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+
												'app1:'+ JSON.stringify(app1)  +
										'	</span>'+  '<br/>' + 
										'	<span class="comment">'+
												'app2:'+ JSON.stringify(app2) +
										'	</span>'+
										'</code>'+
									'</pre>');	
    });
    console.debug('------------------------------------------------------------');  
});
require(['lib/domReady','jquery','app/app3'  ], function(domReady,$,app3 ) { 
    //loaded and can be used here now. 
    console.log('app/app3' );
    console.debug('app1:'); 
    console.debug(app3.app1); 
    console.debug('app2:'); 
    console.debug(app3.app2); 
    console.debug('app3:'); 
    console.debug(app3); 
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+
												'app3.app1:'+ JSON.stringify(app3.app1) + 
										'	</span>'+ '<br/>' + 
										'	<span class="comment">'+
												'app3.app2:'+ JSON.stringify(app3.app2) +
										'	</span>'+  '<br/>' + 
										'	<span class="comment">'+
												'app3:'+ JSON.stringify(app3) +
										'	</span>'+
										'</code>'+
									'</pre>');
    });
    console.debug('------------------------------------------------------------');  
});

require(['lib/domReady','jquery','app/app4'  ], function(domReady,$,app4 ) { 
    //loaded and can be used here now. 
    console.log('app/app4'); 
    console.debug('app4:'); 
    console.debug(app4()); 
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+ 
												'app4:'+ JSON.stringify(app4()) +
										'	</span>'+
										'</code>'+
									'</pre>');
    });
    console.debug('------------------------------------------------------------');  
});


require(['lib/domReady','jquery','app/app5'  ], function(domReady,$,app5 ) { 
    //loaded and can be used here now. 
    console.log('app/app5'); 
    console.debug('app5:'); 
    console.debug(app5()); 
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
										'<code class="html">'+
										'	<span class="comment">'+ 
												'app5:'+ JSON.stringify(app5()) +
										'	</span>'+
										'</code>'+
									'</pre>');
    });
    console.debug('------------------------------------------------------------');  
});



require(['require','lib/domReady','jquery','app/app6'  ], function(require,domReady,$,app6 ) { 
    //loaded and can be used here now. 
    console.log('app/app6'); 
    console.debug('app6:'); 
    console.debug(app6); 
    domReady(function(){
    	    console.debug('i`m ready!'); 
    	    console.debug('to do something...');  
    	    console.debug('init code ');   
    	    $('body').append('<pre>'+
								'<code class="html">'+
								'	<span class="comment">'+ 
										'app6:'+ JSON.stringify(app6) +
								'	</span>'+
								'</code>'+
							'</pre>');
    });
    console.debug('------------------------------------------------------------');  
    console.debug(require.toUrl('app/app6')); 
});