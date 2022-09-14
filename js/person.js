$("#tableUsuario").load("./tables/table_registro");

$(document).on("click",".abrirPerson",function(){
    
    var codperson = $().data("codperson");
    $.ajax({
        method: "POST",
        url: "./forms/forms_person.php",
        data: {
            codperson: codperson,
        },
        success: function(data){
            $("#formusuario").html(data);
            $("#mdlperson").modal('show');
        }
    })

});


$(document).ready(function(){
    $.get('https://api.nationalize.io/?name=juan')
      .done(function(data){
        var res =  data.country;
        var cont = '';
        $.each(res, function(index, value) {
          cont += '<tr>'+
  
                '<td><span id="">'+value.country_id+'</span></td>'+ 
                '<td><span id="">'+value.probability+'</span></td>'+   
              '</tr>';
          });
      console.log(data.name);
      $(".value").val(data.name)
      $(".body-person").html(cont); 
    })
  
  })
  