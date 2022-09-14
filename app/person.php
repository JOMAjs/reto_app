<?php include_once('./partials/head.php') ?>  
  <?php include_once('./partials/nav.php') ?>

    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Usuarios</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="/">Inicio</a></li>
              <li class="breadcrumb-item active">Usuario</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
           <div class="card card-primary card-outline">
              <div class="card-header">

                <div class="card-tools">
                   <h3 class="card-title">Listado de Usuarios</h3>
                 </div>
              </div>
              <div class="card-body" id="tableUsuario">

              </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
<?php include_once('./partials/footer.php') ?>