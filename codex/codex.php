<?php 
$data = array();

class conexion {

    private function db()
    {
        ///$con = new mysqli('127.0.0.1','root','123456789','persona');
        if ($con->connect_errno)
        {
            printf("Falló la conexión: %s\n", $con->connect_error);
            exit();
            # code...
        }
        return $con;
    }

    /////// registrar los datos
    public function retorne()
    {
        $cone = new conexion();
        $db = $cone->db(); 
        
        /// entrar la validacion de si existe o no existe 

        $sql = "SELECT * FROM personas WHERE personas.nombre = ('juan' AND 'pedro') ";
        $return = $db->query($sql);

        return $return;
    }

    public function ASC()
    {
        $cone = new conexion();
        $db = $cone->db(); 
        
        /// entrar la validacion de si existe o no existe 

        $sql = "SELECT * FROM personas ORDER BY edad ASC ";
        $return = $db->query($sql);

        return $return;
    }


    public function mayorEdad()
    {
        $cone = new conexion();
        $db = $cone->db(); 
        
        /// entrar la validacion de si existe o no existe 

        $sql = "SELECT * FROM personas where persona.edad > 25 ";
        $return = $db->query($sql);

        return $return;
    }


}
ob_end_flush();
?>