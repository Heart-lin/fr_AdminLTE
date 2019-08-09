function getRoleList() {
	var param = {
		token: localStorage.getItem('fr_token'),
		curPage:1,
		pageSize:10
	}
	$.ajax({
		type: "post",
		url: url + "/system/roleList",
		//  					async:"true",
		data: JSON.stringify(param),
		contentType: "application/json",
		dataType: "json",
		success: function(res) {
			if(res.returnCode == 501) {
				ToLogin(res)
			} else if(res.returnCode == 200) {
				$.each(res.data.data,function(index,item){
					$("#getRoleList").append('<option value="'+item.id+'">'+item.name+'</option>')
				})
				
			} else {
				alert(res.msg)
			}
		}
	})
}