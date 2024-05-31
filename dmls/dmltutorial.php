<html>
    <head>
        <link rel="stylesheet" href="dml.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet">
        <head>
        <style>
            body{
                overflow: auto;
            }
                /* Custom scrollbar styles */
            body::-webkit-scrollbar {
                width: 12px;
            }

            body::-webkit-scrollbar-track {
                background: #030303;
            }

            body::-webkit-scrollbar-thumb {
                background: #F0AD29;
            }

            body::-webkit-scrollbar-thumb:hover {
                background: #F9C660;
            }
        </style>
    </head>
    <body>
        <?php 
        if(isset($_GET['m'])){
            $page = $_GET['m'];
            if($page == 'select'){
                $halaman = "dml_select.php";
                $title = "Select";
            } else if($page == 'edit'){
                $halaman = 'dml_edit.php';
                $title = "Edit";
            }
            else if($page == 'insert'){
                $halaman = 'dml_insert.php';
                $title = "Insert";
            } else if($page == 'delete'){
                $halaman = 'dml_delete.php';
                $title = "Delete";
            } else if($page == 'like'){
                $halaman = 'dml_like.php';
                $title = "Like As";
            } else if($page == 'agregator'){
                $halaman = 'dml_agregator.php';
                $title = "Agregator";
            } else if($page == 'operator'){
                $halaman = 'dml_operator.php';
                $title = "Operator";
            } else if($page == 'combination'){
                $halaman = 'dml_combination.php';
                $title = "Combining Operators";
            }
            else{
                $judul_halaman = 'Halaman 404';
                $halaman = '404.php';
            }
        } else {
            $title = '';
            $halaman =  "dml_onload.php";
        };

        ?>
        <h1>DML</h1>
        <div class="header"> 
        <a href='dmltutorial.php?m=select'>Select</a>
        <a href='dmltutorial.php?m=insert'>Insert</a>
        <a href='dmltutorial.php?m=edit'>Edit</a>
        <a href='dmltutorial.php?m=delete'>Delete</a>
        <a href='dmltutorial.php?m=operator'>Operator</a>
        <a href='dmltutorial.php?m=like'>Like</a>
        <a href='dmltutorial.php?m=agregator'>Agregator</a>
        <a href='dmltutorial.php?m=combination'>Combination</a>
        </div>
        <?php echo '<h1>'.$title.'</h1>'; ?>
        <?php include($halaman);?>
    </body>
    </html>