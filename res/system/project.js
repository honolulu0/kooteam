zenTemplate={"content":"<div id='J_app'><z-datasource> <var name=\"projects\" size=\"20\">/project/faviList.do</var></z-datasource><div class=\"k-system z-row\"><div class=\"z-col\"><ul><li v-href=\"'/system/home.htm'\"><i class=\"z-icon\">&#xe8b8;</i>系统设置</li><li v-href=\"'/system/todo.htm'\"><i class=\"z-icon\">&#xe614;</i>我创建的任务</li><li v-href=\"'/system/finish.htm'\"><i class=\"z-icon\">&#xe862;</i>已完成待办</li><li class=\"active\"><i class=\"z-icon\">&#xe01d;</i>我的收藏</li><li v-href=\"'/system/profile.htm'\"><i class=\"z-icon\">&#xe7fd;</i>个人资料</li></ul></div><div class=\"z-1\"><h3> 我的收藏</h3><div class=\"content\"><table class=\"z-grid\" v-if=\"projects\"><thead><tr><td>项目名称</td><td>项目创建时间</td><td>收藏时间</td><td>操作</td></tr></thead><tbody><tr v-for=\"item in projects\"><td class=\"z-link\" v-href=\"'/project/board.htm?id='+item._id\">{{item.title}}</td><td>{{item._id|idate}}</td><td>{{item._source|idate}}</td><td><z-execute tip=\"确定删除该搜藏吗？\" :target=\"'/delete/projectFavi.json?_id='+item._source\" class=\"z-link\">删除</z-execute></td></tr></tbody></table></div></div></div><k-todo-detail></k-todo-detail></div>","ext":"","sons":{},"data":{"projects":""}};