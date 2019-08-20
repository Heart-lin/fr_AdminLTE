function deleteStr() {
	var str = '<div class="modal fade in" id="' + modalId + '">\
				<div class="modal-dialog">\
					<div class="modal-content">\
						<div class="modal-header">\
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
	                  				<span aria-hidden="true">×</span></button>\
							<h4 class="modal-title">删除公告</h4>\
						</div>\
						<div class="modal-body">\
							<form class="form-horizontal">\
								<div class="box-body">\
									<input type="hidden" name="id" value="' + obj.id + '"/>\
									<p>是否删除序号为“<span name="id">' + obj.id + '</span>”</p>\
								</div>\
							</form>\
						</div>\
						<div class="modal-footer">\
							<button type="button" class="btn btn-primary save" onclick="' + FUN + '">确认</button>\
						</div>\
					</div>\
				</div>\
			</div>';
	return str;
}

function deletemodal(type, modalId, obj, FUN) {
	swich(type) {
		case "delete":

			if($("#" + modalId).length == 0) {

				$("body").append(str);
			} else {
				$("#" + modalId).modal("show");
			}

	}
}