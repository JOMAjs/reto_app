<?php
 /////// consultar los datos
  function retorne()
 {
   
     
     /// entrar la validacion de si existe o no existe 

     $sql = "SELECT * FROM personas WHERE personas.nombre = ('juan' AND 'pedro') ";
     $return = $db->query($sql);

     return $return;
 }

  function ASC()
 {
     $cone = new conexion();
     $db = $cone->db(); 
     
     /// entrar la validacion de si existe o no existe 

     $sql = "SELECT * FROM personas ORDER BY edad ASC ";
     $return = $db->query($sql);

     return $return;
 }


  function mayorEdad()
 {
     $cone = new conexion();
     $db = $cone->db(); 
     
     /// entrar la validacion de si existe o no existe 

     $sql = "SELECT * FROM personas where persona.edad > 25 ";
     $return = $db->query($sql);

     return $return;
 }

 ?>