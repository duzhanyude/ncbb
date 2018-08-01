$(document).ready(function(){
	
	
	page2_jContainer1_obj=$('#page2_jContainer1_container').layout({
		onresize:function(){
			page2_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page2_jContainer1_center'
		,north__paneSelector:'.page2_jContainer1_north'
		,north__size:	124
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	page2_jContainer2_DataGrids=new Array("page2_jDataGrid1","49");
	page2_jContainer2_obj=$('#page2_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page2_jContainer2_DataGrids);},
		center__paneSelector:'.page2_jContainer2_center'
		,north__paneSelector:'.page2_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
});

jQuery().ready(function(){
	jQuery('#page2_jDataGrid1_table').jqGrid({
		url:'queryDataCall',
		datatype: 'json',
		mtype:"post",
		multiselect: false,
		viewrecords: true,
		colNames:['用户','电话','城市','卡类型','注册时间','二维码ID','次数'],
		colModel:[
			{name:'userId',index:'userId', width:93,align : "center"},
			{name:'phone',index:'phone', width:64,align : "center"},
			{name:'city',index:'city', width:64,align : "center"},
			{name:'cardtype',index:'cartype', width:64,align : "center"},
			{name:'registtime',index:'registtime', width:94,align : "center"},
			{name:'qrcodeId',index:'qrcodeId', width:64,align : "center"},
			{name:'count',index:'count', width:127,align : "center"},
		],
		width: '100%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page2_jDataGrid1_pager')
	}).navGrid('#page2_jDataGrid1_pager',{edit:false,add:false,del:false});
     $("#page2_jButton4").click(function(){
		 jQuery('#page2_jDataGrid1_table').jqGrid().trigger("reloadGrid");
	 });
	    $("#page2_jButton1").click(function(){
		 jQuery('#page2_jDataGrid1_table').jqGrid().trigger("reloadGrid");
	 })
	 setInterval(function() {
		 var mydate = new Date();
         $("#page2_jLabel6").html("现在时间："+mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate() +" "+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
           var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
         var week = today[mydate.getDay()]; 
          $("#page2_jLabel7").html(week);		 
      }, 1000);
		 setInterval(function(){
			  jQuery('#page2_jDataGrid1_table').jqGrid().trigger("reloadGrid");
		 },30000);
})

$(document).ready(function(){
	page2_jContainer1_obj.resizeAll();
});
