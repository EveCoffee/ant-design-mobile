webpackJsonp([69],{1179:function(t,d){t.exports={content:["section",["p","\u7528\u4e8e\u8ba9\u7528\u6237\u5728\u4e0d\u540c\u7684\u89c6\u56fe\u4e2d\u8fdb\u884c\u5207\u6362\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u6807\u7b7e\u6570\u91cf\uff0c\u4e00\u822c 2-4 \u4e2a\uff1b\u5176\u4e2d\uff0c\u6807\u7b7e\u4e2d\u7684\u6587\u6848\u9700\u8981\u7cbe\u7b80\uff0c\u4e00\u822c 2-4 \u4e2a\u5b57\u3002"]],["li",["p","\u5728 iOS \u7aef\u7684\u6b21\u7ea7\u9875\u9762\u4e2d\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u5de6\u53f3\u6ed1\u52a8\u6765\u5207\u6362 Tab\uff0c\u8fd9\u4e2a\u548c iOS \u7684\u5de6\u6ed1\u8fd4\u56de\u5b58\u5728\u51b2\u7a81\uff0ceg\uff1a\u8be6\u60c5\u9875\u4e2d Tabs\u3002"]]]],meta:{category:"Components",type:"Navigation",title:"Tabs",subtitle:"\u6807\u7b7e\u9875",filename:"components/tabs/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["h3","Tabs"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"],["th","\u5fc5\u9009"]]],["tbody",["tr",["td","prefixCls"],["td","\u6837\u5f0f\u524d\u7f00(",["code","web only"],")"],["td","string"],["td","rmc-tabs"],["td","false"]],["tr",["td","tabs"],["td","tab\u6570\u636e"],["td","Models.TabData[]"],["td"],["td","true"]],["tr",["td","tabBarPosition"],["td","TabBar\u4f4d\u7f6e"],["td","'top' ","|"," 'bottom' ","|"," 'left' ",["code","(web only)"]," ","|"," 'right' ",["code","(web only)"]],["td","top"],["td","false"]],["tr",["td","renderTabBar"],["td","\u66ff\u6362TabBar"],["td","((props: TabBarPropsType) => React.ReactNode) ","|"," false"],["td"],["td","false"]],["tr",["td","initialPage"],["td","\u521d\u59cb\u5316Tab, index or key"],["td","number ","|"," string"],["td"],["td","false"]],["tr",["td","page"],["td","\u5f53\u524dTab, index or key"],["td","number ","|"," string"],["td"],["td","false"]],["tr",["td","swipeable"],["td","\u662f\u5426\u53ef\u4ee5\u6ed1\u52a8\u5185\u5bb9\u5207\u6362"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","useOnPan"],["td","\u4f7f\u7528\u8ddf\u624b\u6eda\u52a8"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","prerenderingSiblingsNumber"],["td","\u9884\u52a0\u8f7d\u4e24\u4fa7Tab\u6570\u91cf"],["td","number"],["td","1"],["td","false"]],["tr",["td","animated"],["td","\u662f\u5426\u5f00\u542f\u5207\u6362\u52a8\u753b"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","onChange"],["td","tab\u53d8\u5316\u65f6\u89e6\u53d1"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]],["tr",["td","onTabClick"],["td","tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]],["tr",["td","destroyInactiveTab"],["td","\u9500\u6bc1\u8d85\u51fa\u8303\u56f4Tab"],["td","boolean"],["td","false"],["td","false"]],["tr",["td","distanceToChangeTab"],["td","\u6ed1\u52a8\u5207\u6362\u9608\u503c(\u5bbd\u5ea6\u6bd4\u4f8b)"],["td","number"],["td","0.3"],["td","false"]],["tr",["td","usePaged"],["td","\u662f\u5426\u542f\u7528\u5206\u9875\u6a21\u5f0f"],["td","boolean"],["td","true"],["td","false"]],["tr",["td","tabDirection"],["td","Tab\u65b9\u5411 ",["code","(web only)"]],["td","'horizontal' ","|"," 'vertical'"],["td","horizontal"],["td","false"]],["tr",["td","tabBarUnderlineStyle"],["td","tabBar\u4e0b\u5212\u7ebf\u6837\u5f0f"],["td","React.CSSProperties ","|"," any"],["td"],["td","false"]],["tr",["td","tabBarBackgroundColor"],["td","tabBar\u80cc\u666f\u8272"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarActiveTextColor"],["td","tabBar\u6fc0\u6d3bTab\u6587\u5b57\u989c\u8272"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarInactiveTextColor"],["td","tabBar\u975e\u6fc0\u6d3bTab\u6587\u5b57\u989c\u8272"],["td","string"],["td"],["td","false"]],["tr",["td","tabBarTextStyle"],["td","tabBar\u6587\u5b57\u6837\u5f0f"],["td","React.CSSProperties ","|"," any"],["td"],["td","false"]],["tr",["td","renderTab"],["td","\u66ff\u6362TabBar\u7684Tab"],["td","(tab: Models.TabData) => React.ReactNode"],["td"],["td","false"]]]],["h3","Tabs.DefaultTabBar"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"],["th","\u5fc5\u9009"]]],["tbody",["tr",["td","goToTab"],["td","\u8df3\u8f6cTab"],["td","(index: number) => boolean"],["td"],["td","true"]],["tr",["td","tabs"],["td","tab\u6570\u636e"],["td","Models.TabData[]"],["td"],["td","true"]],["tr",["td","activeTab"],["td","\u5f53\u524d\u6fc0\u6d3bTab\u7d22\u5f15"],["td","number"],["td"],["td","true"]],["tr",["td","animated"],["td","\u662f\u5426\u4f7f\u7528\u52a8\u753b"],["td","boolean"],["td"],["td","true"]],["tr",["td","prefixCls"],["td","\u6837\u5f0f\u524d\u7f00 (",["code","web only"],")"],["td","string"],["td","am-tabs-default-bar"],["td","false"]],["tr",["td","renderTab"],["td","\u66ff\u6362TabBar\u7684Tab"],["td","(tab: Models.TabData) => React.ReactNode"],["td"],["td","false"]],["tr",["td","page"],["td","Tab\u5206\u9875\u5c3a\u5bf8"],["td","number"],["td","5"],["td","false"]],["tr",["td","onTabClick"],["td","tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","(tab: Models.TabData, index: number) => void"],["td"],["td","false"]]]]]}}});