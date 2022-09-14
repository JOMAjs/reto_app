 function msg(msg,int)
 {
    var result;

    if(parseInt(int)==1){
        result   ='<div class="alert alert-dismissible alert-danger">';
        result +='<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
        result+=' <h5><i class="icon fas fa-check"></i> Actualizacion !</h5>';
        result +='<p>'+msg+'</p>';
        result +='</div>';
        document.getElementById('_MSG_').innerHTML =result;
        
    }
 }
