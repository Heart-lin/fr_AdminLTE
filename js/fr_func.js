function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串   
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function ToLogin(res) {
	if($("#ToLogin").length == 0) {
		var string = '<div class="modal fade" id="Tologin">\
				<div class="modal-dialog">\
					<div class="modal-content">\
						<div class="modal-header">\
							<h4 class="modal-title">重新登录</h4>\
						</div>\
						<div class="modal-body">\
							 <form role="form">\
              <div class="box-body">\
                <div class="form-group">\
                	<p id="model-phone">' + res.msg + '</p>\
                </div>\
              </div>\
            </form>\
						</div>\
						<div class="modal-footer">\
							<a type="button" class="btn btn-primary" href="login.html">去登录</a>\
						</div>\
					</div>\
				</div>\
			</div>';
		$("body").append(string);
	}
	$('#Tologin').modal('show');
	return false;
}

function alertMsg() {

	var opacity = 1;
	setInterval(function() {
		$("#alert").css("opacity", opacity);
	}, 1000)
}

function TimeRange(id) {
	var time = $("#" + id).val();
	var startTime = time.substring(0, 10);
	var endTime = time.substring(13, 23);
	var timeJSON = {
		startTime: startTime,
		endTime: endTime
	}
	return timeJSON
}

function userStatus(status) {
	var str = "";
	if(status == -1) {
		str = '<a href="javascript:;"><div class="fr_status fr_danger">封号</div></a>';
	} else if(status == -2) {
		str = '<a href="javascript:;"><div class="fr_status fr_default">激活审核中</div></a>';
	} else if(status == 1) {
		str = '<a href="javascript:;"><div class="fr_status fr_default">未激活</div></a>';
	} else if(status == 2) {
		str = '<a href="javascript:;"><div class="fr_status fr_success">已激活</div></a>';
	}
	return str;
}

function codeStatus(status) {
	var str = "";
	if(status == -1) {
		str = '<a href="javascript:;"><div class="fr_status fr_danger">已风控</div></a>';
	} else if(status == 1) {
		str = '<a href="javascript:;"><div class="fr_status fr_info">正常</div></a>';
	}
	return str;
}
//status
function codeType(type) {
	var str = "";
	if(type == 1) {
		str = '支付宝个码';
	} else if(type == 2) {
		str = '微信个码';
	} else if(type == 3) {
		str = '银行卡个码';
	} else if(type == 4) {
		str = '商户个码';
	}
	return str;
}

function orderStatus(status) {
	var str = "";
	if(status == 1) {
		str = '<a href="javascript:;"><div class="fr_status fr_info">进行中</div></a>';
	} else if(status == 2) {
		str = '<a href="javascript:;"><div class="fr_status fr_success">成功</div></a>';
	} else if(status == -1) {
		str = '<a href="javascript:;"><div class="fr_status fr_default">失败</div></a>';
	}
	return str;
}

function Income(status) {
	var str = "";
	if(status == 1) {
		str = '<a href="javascript:;"><div class="fr_status fr_info">待确认收款</div></a>';
	} else if(status == 2) {
		str = '<a href="javascript:;"><div class="fr_status fr_success">已完成</div></a>';
	} else if(status == -1) {
		str = '<a href="javascript:;"><div class="fr_status fr_default">已失效</div></a>';
	}
	return str;
}

function level(level) {
	var str = "";
	if(level == 1) {
		str = '一级';
	} else if(level == 2) {
		str = '二级';
	} else if(level == 3) {
		str = '三级';
	} else if(level == 4) {
		str = '四级';
	} else if(level == 5) {
		str = '五级';
	}else if(level == 6) {
		str = '六级及以上';
	}else if(level == 0) {
		str = '订单归属者';
	}else if(level == "-1") {
		str = '领导人';
	}
	return str;
}
function financial_account_Type(type) {
	var str = "";
	if(type == 1) {
		str = '激活';
	} else if(type == 2) {
		str = '充值';
	} else if(type == 3) {
		str = '提现';
	} else if(type == 4) {
		str = '收益';
	}
	return str;
}

function financialMoney(num) {
	var str = "";
	if(num > 0) {
		str = '<p class="text-green">+' + num + '</p>';
	} else {
		str = '<p class="text-red">' + num + '</p>';
	}
	return str;
}

function financialType(status) {
	var str = "";
	if(status == 1) {
		str = '<a href="javascript:;"><div class="fr_status fr_info">正在收款</div></a>';
	} else if(status == 2) {
		str = '<a href="javascript:;"><div class="fr_status fr_success">停止收款</div></a>';
	} else if(status == -1) {
		str = '<a href="javascript:;"><div class="fr_status fr_default">作废</div></a>';
	}
	return str;
}

function count(num1, num2) {
	var a;
	if(num1 != 0) {
		a = num1 / num2;
	} else {
		a = 0;
	}
	return a.toFixed(2) * 100 + "%";
}

function getPic() {
	$.ajax({
		type: "post",
		url: url + "app/user/getQiniuUrl",
		async: false,
		contentType: "application/json",
		dataType: 'json',
		success: function(res) {
			if(res.returnCode == 200) {
				var str = '<input type="hiddem" id="picUrl" value="' + res.data + '"/>';
				$("body").append(str);
			}
		}
	})
}

$(".picTable").on("click","img",function(){
	if($(".imgpopup").length==0){
		$("body").append("<div class='popup imgpopup'><img src="+$(this).attr("src")+"></div>");
	}else{
		$(".imgpopup").show();
	}
	
})
$("body").on("click",".imgpopup",function(){
	$(this).hide();
})
