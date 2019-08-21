console.log(window.location.href);
function GetUrlRelativePath(){
	var url = window.location.href;
	var urlArray = url.split("/");
	return urlArray[urlArray.length-1].split("?")[0];
}
function exit(){
	localStorage.removeItem('fr_token');
	window.location.href="login.html";
}
console.log(GetUrlRelativePath());
var header=
'<header class="main-header">\
    <a href="index2.html" class="logo">\
      <span class="logo-mini"><b>A</b>LT</span>\
      <span class="logo-lg"><b>Admin</b>LTE</span>\
    </a>\
    <nav class="navbar navbar-static-top">\
      <!-- Sidebar toggle button-->\
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">\
        <span class="sr-only">Toggle navigation</span>\
      </a>\
      <div class="navbar-custom-menu">\
        <ul class="nav navbar-nav">\
          <li class="dropdown user user-menu">\
			<a href=" " class="dropdown-toggle" data-toggle="dropdown">\
								<img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">\
								<span class="hidden-xs manager-name">'+localStorage.getItem('fr_name')+'</span>\
							</a>\
							<ul class="dropdown-menu">\
								<!-- User image -->\
								<li class="user-header">\
									<img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\
									<p class="manager-name">'+localStorage.getItem('fr_name')+'</p>\
								</li>\
								<!-- Menu Footer-->\
								<li class="user-footer">\
									<div class="pull-right">\
										<a href="#" class="btn btn-default btn-flat" onclick="exit()">退出登录</a>\
									</div>\
								</li>\
							</ul>\
						</li>\
        </ul>\
      </div>\
    </nav>\
  </header>'
$(".wrapper").prepend(header);

var menuData = JSON.parse(localStorage.getItem("fr_menu"));

var Nav ='<aside class="main-sidebar"><section class="sidebar"><ul class="sidebar-menu" data-widget="tree">';

$.each(menuData, function(index , item) {
	Nav+='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+index+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu">'
	$.each(item,function(index,items){
		var active = "";
		
		items.url==GetUrlRelativePath()?(active="active"):(active="");
		Nav+='<li class="'+ active +' li"><a href="'+items.url+'" pageId="'+items.pageId+'">'+items.name+'</a></li>'
	})
	Nav+='</ul></li>'
});
Nav += '</ul></section></aside>';

$(".wrapper").prepend(Nav);
$(".li.active").parents(".treeview").addClass("menu-open active")

if($("#dataTable").length>0){
	$.fn.dataTable.ext.errMode = 'none';
}
//var footer = 
//'<footer class="main-footer">\
//  <div class="pull-right hidden-xs">\
//    Anything you want\
//  </div>\
//  <strong>Copyright &copy; 2019 <a href="#">Company</a>.</strong> All rights reserved.\
//</footer>';
//$(".wrapper").append(footer);
