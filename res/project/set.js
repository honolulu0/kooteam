zenTemplate={"content":"<div id='J_app'><z-datasource> <var name=\"stat\">/project/stat.do?$id</var></z-datasource><div class=\"k-project-set z-row\"><div class=\"z-col k-project-toolbar\"><div v-href=\"'/project/board.htm?$id'\"> <i class=\"z-icon\">&#xe614;</i> <span>看板</span></div><div v-href=\"'/project/doc.htm?$id'\"> <i class=\"z-icon\">&#xe85d;</i> <span>文档</span></div><div v-href=\"'/project/member.htm?$id'\"> <i class=\"z-icon\">&#xe7ef;</i> <span>成员</span></div><div class=\"active\"> <i class=\"z-icon\">&#xe24b;</i> <span>统计</span></div></div><div class=\"z-1\"><h3> 项目统计</h3><div v-if=\"stat===0\" class=\"empty\">暂无统计数据</div><div v-else class=\"stat\"><div class=\"card unfinish\"><div>{{stat.unfinish}}</div><h4>未完成任务</h4></div><div class=\"card finished\"><div>{{stat.finished}}</div><h4>已完成任务</h4></div><div class=\"card over\"><div>{{stat.overtime}}</div><h4>超期任务</h4></div></div></div></div></div>","ext":"","sons":{},"data":{"stat":""}};