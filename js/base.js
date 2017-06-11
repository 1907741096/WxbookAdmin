$('#submit').click(function(){
	var data = $("#form").serializeArray();
    postData = {};
    $(data).each(function(i){
       postData[this.name] = this.value;
    });
    var url = SCOPE.url;
    var jump_url=SCOPE.jump_url;
    window.location.href=jump_url; return;
    $.post(url,postData,function(result){
        if(result.status == 1) {
            //成功
            window.location.href=jump_url; 
        }else if(result.status == 0) {
            // 失败     
            alert(result.message);
        }
    },"json");
});