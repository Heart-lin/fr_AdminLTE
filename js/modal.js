//function delete(modalId,obj,FUN) {
//	if($("#modalId").length()){
//		
//	
//	var str = '<div class="modal fade in" id="' + modalId + '">\
//				<div class="modal-dialog">\
//					<div class="modal-content">\
//						<div class="modal-header">\
//							<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
//	                  				<span aria-hidden="true">×</span></button>\
//							<h4 class="modal-title">删除公告</h4>\
//						</div>\
//						<div class="modal-body">\
//							<form class="form-horizontal">\
//								<div class="box-body">\
//									<input type="hidden" name="id" value="' + obj.id + '"/>\
//									<p>是否删除序号为“<span name="id">' + obj.id + '</span>”</p>\
//								</div>\
//							</form>\
//						</div>\
//						<div class="modal-footer">\
//							<button type="button" class="btn btn-primary save" onclick="' + FUN + '">确认</button>\
//						</div>\
//					</div>\
//				</div>\
//			</div>';
//			
//	}		
//	return str;
//}

function rejectModal(modalId,obj){
//	console.log($("#"+modalId).length)
	if($("#"+modalId).length==0){
		var str = '<div class="modal fade in"  id = "' + modalId + '"><div class="modal-dialog">\
					<div class="modal-content">\
						<div class="modal-header">\
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
	                  				<span aria-hidden="true">×</span></button>\
							<h4 class="modal-title">驳回</h4>\
						</div>\
						<div class="modal-body">\
							<form class="form-horizontal">\
								<div class="box-body">\
									<div class="form-group">\
										<label for="account" class="col-sm-3 control-label">驳回理由</label>\
										<div class="col-sm-9">';
		$.each(obj,function(index,item){
			str+='<input type="hidden" name="'+index+'" value="'+ item +'">'
		})
		
		str+='<input type="text" class="form-control" id="remark" name="remark">\
										</div>\
									</div>\
								</div>\
							</form>\
						</div>\
						<div class="modal-footer">\
							<button type="button" class="btn btn-primary save">确认</button>\
						</div>\
					</div>\
				</div>\
			</div>';
			
		$("body").append(str);
		$("#"+modalId).modal("show");
	}else{
		
		$("#"+modalId).find("input").val("")
		$.each(obj,function(index,item){
			$("#"+modalId).find("input[name="+index+"]").val(item);
		})
		$("#"+modalId).modal("show");
		
	}
}

//function deletemodal(type, modalId, obj, FUN) {
//	swich(type) {
//		case "delete":
//			if($("#" + modalId).length == 0) {
//				var str= deleteStr();
//				
//				$("body").append(str);
//			} else {
//				$("#" + modalId).modal("show");
//			}
//
//	}
//}