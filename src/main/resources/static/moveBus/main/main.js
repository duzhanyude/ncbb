$(document).ready(function(){
	
	page3_jContainer1_tabs=new Array("page3_jTabControl1");
	page3_jContainer1_obj=$('#page3_jContainer1_container').layout({
		onresize:function(){
			Vjjq.refreshContainer(page3_jContainer1_tabs,'');
			page3_jContainer2_obj.resizeAll();},
		center__paneSelector:'.page3_jContainer1_center'
		,north__paneSelector:'.page3_jContainer1_north'
		,north__size:	104
		,north__spacing_open:	0
		,south__paneSelector:'.page3_jContainer1_south'
		,south__size:	36
		,south__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	page3_jContainer2_DataGrids=new Array("page3_jDataGrid1","49");
	page3_jContainer2_obj=$('#page3_jContainer2_container').layout({
		onresize:function(){
			Vjjq.resizegrid(page3_jContainer2_DataGrids);},
		center__paneSelector:'.page3_jContainer2_center'
		,north__paneSelector:'.page3_jContainer2_north'
		,north__size:	31
		,north__spacing_open:	0
		,maskIframesOnResize: true
	});
	
	$('#page3_jTabControl1_body').tabs({
		heightStyle: "fill",
		activate: function( event, ui ) {
			page3_jContainer2_obj.resizeAll();
		}
	});
});

jQuery().ready(function(){
	jQuery('#page3_jDataGrid1_table').jqGrid({
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
		width: '50%',
		height: '100%',
		rowNum:20,
		pager: jQuery('#page3_jDataGrid1_pager')
	}).navGrid('#page3_jDataGrid1_pager',{edit:false,add:false,del:false});
	
	 $("#page3_jButton4").click(function(){
		 jQuery('#page3_jDataGrid1_table').jqGrid().trigger("reloadGrid");
	 });
	 setInterval(x=>jQuery('#page3_jDataGrid1_table').jqGrid().trigger("reloadGrid"),30000);
	setInterval(LoadData,15000);
	setInterval(LoadDate, 1000);
})
function LoadData(){
	$.get('/moveBus/getCount',function(data){
       if(data){
    	   $('#page3_jLabel9').html(data.register);
    	   $('#page3_jLabel11').html(data.scanCode);
    	   $('#page3_jLabel12').html(data.rgTotal);
	   }		
	});
  
}

function LoadDate(){
   var mydate = new Date();
   $("#page3_jLabel4").html("现在时间："+mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate() +" "+mydate.getHours()+":"+mydate.getMinutes()+":"+mydate.getSeconds());
   var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
   var week = today[mydate.getDay()]; 
   $("#page3_jLabel13").html(week);
   
}
$(document).ready(function(){
	page3_jContainer1_obj.resizeAll();
});
