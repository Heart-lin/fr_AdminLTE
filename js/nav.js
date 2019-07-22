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
          <li class="dropdown notifications-menu">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
              <i class="fa fa-bell-o"></i>\
              <span class="label label-warning">10</span>\
            </a>\
          </li>\
          <li class="dropdown tasks-menu">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
              <i class="fa fa-flag-o"></i>\
              <span class="label label-danger">9</span>\
            </a>\
          </li>\
          <li class="dropdown user user-menu notifications-menu">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">\
              <span class="hidden-xs">Alexander Pierce</span>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <ul class="menu">\
                  <li>\
                    <a href="#">\
                      <i class="fa fa-users text-red"></i>个人中心\
                    </a>\
                  </li>\
                  <li>\
                    <a href="#">\
                      <i class="fa fa-shopping-cart text-green"></i>个人设置\
                    </a>\
                  </li>\
                  <li>\
                    <a href="#">\
                      <i class="fa fa-user text-red"></i>退出登录\
                    </a>\
                  </li>\
                </ul>\
              </li>\
            </ul>\
          </li>\
        </ul>\
      </div>\
    </nav>\
  </header>'
$(".wrapper").prepend(header);

var leftNav = 
'<aside class="main-sidebar">\
	<section class="sidebar">\
		 <ul class="sidebar-menu" data-widget="tree">\
			<li class="header">HEADER</li>\
			<li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>\
			<li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>\
			<li class="treeview"> <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>\
				<ul class="treeview-menu">\
					<li><a href="#">Link in level 2</a></li>\
					<li><a href="#">Link in level 2</a></li>\
				</ul>\
			</li>\
		</ul>\
	</section>\
</aside>';
console.log(leftNav)
$(".wrapper").prepend(leftNav);

var footer = 
'<footer class="main-footer">\
    <div class="pull-right hidden-xs">\
      Anything you want\
    </div>\
    <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.\
</footer>';
$(".wrapper").append(footer);

var power =
[[{
	name:"数据分析",
	url:"home.html"
}],
[{
	name:"用户列表",
	url:"user_List.html"
}],
[{
	name:"支付宝个码",
	url:"code_pool_ali.html"
},
{
	name:"银行卡",
	url:"code_pool_card.html"
},
{
	name:"商户码",
	url:"code_pool_tenant.html"
},
{
	name:"微信个码",
	url:"code_pool_wet.html"
}],
[{
	name:"订单列表",
	url:"order_list.html"
}],
[{
	name:"收支明细",
	url:"finance_details.html"
},
{
	name:"充值审核",
	url:"finance_recharge.html"
},
{
	name:"提现审核",
	url:"finance_drawings.html"
},
{
	name:"收款账户管理",
	url:"finance_account.html"
},
{
	name:"团队支出明细",
	url:"finance_team.html"
}],
[{
	name:"系统设置",
	url:"system_set.html"
},
{
	name:"账号管理",
	url:"system_account.html"
},
{
	name:"权限管理",
	url:"system_power.html"
}]];
console.log(power);
