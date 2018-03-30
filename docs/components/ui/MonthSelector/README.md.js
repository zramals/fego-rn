webpackJsonp([22],{480:function(t,e){t.exports={content:["article",["h1","\u6708\u4efd\u9009\u62e9\u63a7\u4ef6 MonthPicker"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u6708\u4efd\u9009\u62e9\u5668\uff0c\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u7531 Popup \u6765\u5145\u5f53 MonthPicker \u7684\u5bb9\u5668\uff0c\u901a\u8fc7onselect\u53d6\u503c\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u6570\u636e\u53ca\u683c\u5f0f\u6570\u636e\u5185\u5bb9\u4e3adata (",["span","{value,label}"],")"]]],["h3","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:"html",highlighted:"import Popup from 'somewhere'\nimport MonthPicker from 'somewhere'\nPopup.show(\n\t&lt;MonthPicker\n\t\tinitialValue={this.state.MonthPicker1Value}\n\t\tonClose={()=>{Popup.hide()}}\n\t/>, someOpt\n)"},["code","import Popup from 'somewhere'\nimport MonthPicker from 'somewhere'\nPopup.show(\n\t<MonthPicker\n\t\tinitialValue={this.state.MonthPicker1Value}\n\t\tonClose={()=>{Popup.hide()}}\n\t/>, someOpt\n)"]],["h2","API"],["h3","props\u5217\u8868"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","data"],["td","\u9009\u62e9\u5668\u7684\u6570\u636e\u6e90"],["td","array"],["td","[]"]],["tr",["td","initialValue"],["td","\u521d\u59cb\u503c"],["td","array"],["td","[]"]],["tr",["td","onClose"],["td","\u5173\u95ed\u56de\u8c03"],["td","func"],["td","-"]],["tr",["td","onSelect"],["td","\u9009\u4e2d\u56de\u8c03"],["td","func"],["td","-"]]]],["h3","\u6837\u5f0f\u5bf9\u8c61styles"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u9002\u7528\u7c7b\u578b"]]],["tbody"]],["h3","\u9759\u6001\u65b9\u6cd5"],["table",["thead",["tr",["th","\u65b9\u6cd5\u540d"],["th","\u7528\u9014"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","format"],["td","\u683c\u5f0f\u5316\u6570\u636e\u7684\u51fd\u6570"],["td",["code","function (year, month) { }"]],["td",["code","YYYY\u5e74MM\u6708"]]],["tr",["td","getMonths"],["td","\u83b7\u53d6\u9009\u62e9\u5668\u7684\u6570\u636e"],["td",["code","function () { return months }"]],["td","-"]],["tr",["td","setStartMonths"],["td","\u8bbe\u7f6e\u521d\u59cb\u6708\u4efd"],["td",["code","function (newStartMonth) { }"]],["td","201609"]]]],["h3","props data \u8bf4\u660e"],["ul",["li",["p","MonthPicker \u5185\u7f6e\u4e86\u6570\u636e\uff0c\u4e3a\u4ece\u4ea4\u6613\u6240 app \u4e0a\u7ebf\u5230\u6628\u5929\u6240\u5728\u6708\u4efd\u7684\u6708\u4efd\u8303\u56f4"]],["li",["p","\u4e5f\u53ef\u901a\u8fc7 data \u5c5e\u6027\u4f20\u7ed9\u9009\u62e9\u5668\u6570\u636e\uff0c\u57fa\u672c\u683c\u5f0f\u540c Picker \u7684\u6570\u636e\u683c\u5f0f"]]],["pre",{lang:"html",highlighted:"[{\n\tlabel: '2011\u5e7409\u6708',\n\tvalue: '201109'\n}, {\n\tlabel: '2011\u5e7410\u6708',\n\tvalue: '201110'\n}]"},["code","[{\n\tlabel: '2011\u5e7409\u6708',\n\tvalue: '201109'\n}, {\n\tlabel: '2011\u5e7410\u6708',\n\tvalue: '201110'\n}]"]]],meta:{title:"MonthPicker",subTitle:"\u6708\u4efd\u9009\u62e9\u5668",filename:"components/ui/MonthSelector/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u6708\u4efd\u9009\u62e9\u63a7\u4ef6-MonthPicker",title:"\u6708\u4efd\u9009\u62e9\u63a7\u4ef6 MonthPicker"},"\u6708\u4efd\u9009\u62e9\u63a7\u4ef6 MonthPicker"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h3",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u5bf9\u8c61styles",title:"\u6837\u5f0f\u5bf9\u8c61styles"},"\u6837\u5f0f\u5bf9\u8c61styles"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u9759\u6001\u65b9\u6cd5",title:"\u9759\u6001\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5"]],["li",["a",{className:"bisheng-toc-h3",href:"#props-data-\u8bf4\u660e",title:"props data \u8bf4\u660e"},"props data \u8bf4\u660e"]]]}}});