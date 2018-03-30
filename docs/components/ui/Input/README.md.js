webpackJsonp([25],{477:function(t,a){t.exports={content:["article",["h1","\u8f93\u5165\u6846"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u6587\u672c\u8f93\u5165\u6846"]]],["h3","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u9519\u8bef\u72b6\u6001<span class="token punctuation">\'</span></span> <span class="token attr-name">autoFocus</span> <span class="token attr-name">error</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u4f7f\u7528\u975e\u53d7\u63a7\u5c5e\u6027\uff0c\u5e26\u9519\u8bef\u72b6\u6001\uff0c\u4e14\u81ea\u52a8\u805a\u7126<span class="token punctuation">\'</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u4f7f\u7528\u975e\u53d7\u63a7\u5c5e\u6027<span class="token punctuation">\'</span></span> <span class="token attr-name">clear</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u5e26\u5220\u9664\u6309\u94ae\u7684\u8f93\u5165\u6846<span class="token punctuation">\'</span></span><span class="token punctuation">/></span></span>\n&lt;Input label=\'\u4f7f\u7528\u53d7\u63a7\u5c5e\u6027\' clear value={this.state.inputValue} onChange={v => {\n\tthis.setState({\n\t\tinputValue: v\n\t})\n}}/>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">last</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u6700\u540e\u4e00\u4e2a\uff0c\u65e0\u5e95\u8fb9\u6846<span class="token punctuation">\'</span></span><span class="token punctuation">/></span></span>'},["code","<Input label='\u9519\u8bef\u72b6\u6001' autoFocus error defaultValue='\u4f7f\u7528\u975e\u53d7\u63a7\u5c5e\u6027\uff0c\u5e26\u9519\u8bef\u72b6\u6001\uff0c\u4e14\u81ea\u52a8\u805a\u7126'/>\n<Input label='\u4f7f\u7528\u975e\u53d7\u63a7\u5c5e\u6027' clear placeholder='\u5e26\u5220\u9664\u6309\u94ae\u7684\u8f93\u5165\u6846'/>\n<Input label='\u4f7f\u7528\u53d7\u63a7\u5c5e\u6027' clear value={this.state.inputValue} onChange={v => {\n\tthis.setState({\n\t\tinputValue: v\n\t})\n}}/>\n<Input last defaultValue='\u6700\u540e\u4e00\u4e2a\uff0c\u65e0\u5e95\u8fb9\u6846'/>"]],["h2","API"],["h3","props\u5217\u8868"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","last"],["td","\u662f\u5426\u662f\u4e00\u7ec4\u8f93\u5165\u6846\u91cc\u7684\u6700\u540e\u4e00\u4e2a\u8f93\u5165\u6846, \u9ed8\u8ba4\u8f93\u5165\u6846\u6709 borderBottom, \u4f46\u6700\u540e\u4e00\u4e2a\u6ca1\u6709"],["td","boolean"],["td","false"]],["tr",["td","label"],["td","\u8f93\u5165\u6846label"],["td","string or element"],["td","-"]],["tr",["td","type"],["td","\u8f93\u5165\u6846\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301(text,number,phone,bankCard)"],["td","string"],["td","text"]],["tr",["td","keyboardType"],["td","\u952e\u76d8\u7c7b\u578b\uff0c\u4e0d\u4f20\u5219\u53c2\u8003type\u81ea\u52a8\u5224\u65ad\u952e\u76d8\u7c7b\u578b"],["td","string"],["td","-"]],["tr",["td","placeholder"],["td","\u65e0\u8f93\u5165\u6587\u5b57\u65f6\u663e\u793a\u7684\u63d0\u793a\u6587\u6848"],["td","string"],["td","-"]],["tr",["td","clear"],["td","\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae"],["td","boolean"],["td","false"]],["tr",["td","value"],["td","\u53d7\u63a7\u5c5e\u6027\uff1a\u9700\u914d\u5408 onChange \u4f7f\u7528\u66f4\u65b0\u6570\u636e value"],["td","string"],["td","-"]],["tr",["td","defaultValue"],["td","\u975e\u63a7\u5c5e\u6027"],["td","string"],["td","''"]],["tr",["td","editable"],["td","\u8f93\u5165\u6846\u662f\u5426\u53ef\u7f16\u8f91"],["td","boolean"],["td","true"]],["tr",["td","maxLength"],["td","\u6700\u5927\u5b57\u7b26\u6570"],["td","number"],["td","-"]],["tr",["td","autoFormat"],["td","\u662f\u5426\u81ea\u52a8\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"],["td","boolean"],["td","true"]],["tr",["td","format"],["td","\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u51fd\u6570\uff0c\u5728 autoFormat \u4e3a true \u65f6\u751f\u6548\uff0c\u4e0d\u4f20\u5219\u6309\u7167\u7ec4\u4ef6\u9ed8\u8ba4\u7684\u65b9\u5f0f\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\uff0c\u76ee\u524d\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u2018\u94f6\u884c\u5361\u2019\u548c\u2018\u624b\u673a\u53f7\u2019\u4e24\u79cd\u5b57\u7b26\u4e32\u7684\u683c\u5f0f\u5316"],["td","function"],["td","-"]],["tr",["td","autoFocus"],["td","\u521d\u59cb\u5316\u65f6\u8f93\u5165\u6846\u662f\u5426\u83b7\u5f97\u7126\u70b9"],["td","boolean"],["td","false"]],["tr",["td","focused"],["td","\u8f93\u5165\u6846\u5b58\u5728\u671f\u662f\u5426\u83b7\u5f97\u7126\u70b9\u7684\u53d7\u63a7\u5c5e\u6027"],["td","boolean"],["td","false"]],["tr",["td","onChange"],["td","\u6587\u672c\u53d8\u5316\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u8f93\u5165\u6846\u503c\u548cInput\u7ec4\u4ef6\u5bf9\u8c61"],["td","function(value, comp){}"],["td","-"]],["tr",["td","onBlur"],["td","\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u8f93\u5165\u6846\u503c"],["td","function(value){}"],["td","-"]],["tr",["td","onFocus"],["td","\u8f93\u5165\u6846\u83b7\u5f97\u7126\u70b9\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u8f93\u5165\u6846\u503c"],["td","function(value){}"],["td","-"]],["tr",["td","extra"],["td","\u8f93\u5165\u6846\u540e\u7f00\u4fe1\u606f"],["td","string or element"],["td","-"]],["tr",["td","onExtraClick"],["td","\u540e\u7f00\u70b9\u51fb\u56de\u8c03"],["td","function(){}"],["td","-"]],["tr",["td","error"],["td","\u662f\u5426\u663e\u793a\u9519\u8bef\u63d0\u793a\u4fe1\u606f"],["td","boolean"],["td","false"]],["tr",["td","errorColor"],["td","\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u989c\u8272"],["td","string"],["td","'#f50'"]],["tr",["td","errorIconFamily"],["td","\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u56fe\u6807\u5e93"],["td","string"],["td","-"]],["tr",["td","errorIconName"],["td","\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u56fe\u6807"],["td","string"],["td","exclamation-circle"]],["tr",["td","onErrorClick"],["td","\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u70b9\u51fb\u56de\u8c03"],["td","function(){}"],["td","-"]]]],["h3","\u6837\u5f0f\u5bf9\u8c61styles"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u9002\u7528\u7c7b\u578b"]]],["tbody",["tr",["td","container"],["td","\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","label"],["td","label \u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u65f6\u6837\u5f0f"],["td","Text"]],["tr",["td","input"],["td","\u8f93\u5165\u6846\u6837\u5f0f"],["td","TextInput"]],["tr",["td","extra"],["td","\u540e\u7f00\u4fe1\u606f\u4e3a string \u65f6\u7684\u6837\u5f0f"],["td","Text"]],["tr",["td","error"],["td","\u9519\u8bef\u4fe1\u606f\u5bb9\u5668\u7684\u6837\u5f0f"],["td","View"]],["tr",["td","errorIcon"],["td","\u9519\u8bef\u56fe\u6807\u7684\u6837\u5f0f"],["td","Icon"]]]]],meta:{title:"Input",subTitle:"\u8f93\u5165\u6846",filename:"components/ui/Input/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u8f93\u5165\u6846",title:"\u8f93\u5165\u6846"},"\u8f93\u5165\u6846"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h3",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u5bf9\u8c61styles",title:"\u6837\u5f0f\u5bf9\u8c61styles"},"\u6837\u5f0f\u5bf9\u8c61styles"]]]}}});