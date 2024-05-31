<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="css/index2.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet">
    <title>Grid Layout</title>
    <style>
    </style>
</head>
<body>

<audio id="backgroundMusic" autoplay loop>
    <source src="music/bossmusic.mp3" type="audio/mpeg">
</audio>


<div id="carouselOverlay" class="carousel-overlay">
    <div class="carousel-container">
        <img id="carouselImage" src="image1.jpg" alt="Carousel Image">
        <div class="button-container">
        <button id="prevButton" class="nav-button">←</button>
        <button id="nextButton" class="nav-button">→</button>
        <button id="okButton" class="ok-button">ok</button>
        </div>
    </div>
</div>

<div id="myModal" class="modal">
<div class="modal-content">
    <span class="close">&times;</span>
    <iframe src="dmls/dmltutorial.php" style="width: 100%; height: 500px; overflow:auto; border: none;"></iframe>
</div>
    </div>

<div class="container1">
    <div class="main-left">
        <div class="main-topleft">
            <img src="image/bossfast.gif" alt="Image">
            <div id="correctHpDisplay">boss HP: 20</div>
        </div>
        <div class="main-downleft">
            <form id="mathForm" onsubmit="checkAnswer(event)">
                <input type="text" id="answer" name="answer" placeholder="type your answer..." autofocus>
            </form>
        </div>
    </div>
    <div class="main-right">
        <div class="main-topright">
            <label for="answer"><div class="question"> show all data from the companies table</div></label>
        </div>
        <div class="main-middleright">
            Companies
            <table>
                <tr>
                    <th>id</th>
                    <th>company</th>
                    <th>contact</th>
                    <th>country</th>
                    <th>address</th>
                </tr>
                <?php 
                include("table/companies.php");
                for ($i=0;$i<count($table1);$i++){
                    echo "<tr>
                    <td>".($i+1)."</td>
                    <td>".$table1[$i]["Company"]."</td>
                    <td>".$table1[$i]["Contact"]."</td>
                    <td>".$table1[$i]["Country"]."</td>
                    <td>".$table1[$i]["Address"]."</td>
                    </tr>";
                }
                ?>
            </table>   
            Workers
            <table>
                <tr>
                    <th>CompanyID</th>
                    <th>WorkerID</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Region</th>
                </tr>
                <?php 
                include("table/workers.php");
                for ($i=0;$i<count($table2);$i++){
                    echo "<tr>
                    <td>".($i+1)."</td>
                    <td>".($i+10)."</td>
                    <td>".$table2[$i]["Name"]."</td>
                    <td>".$table2[$i]["Job"]."</td>
                    <td>".$table2[$i]["Region"]."</td>
                    </tr>";
                }
                ?>
            </table>   
        </div>
        <div class="main-downright">
            <div class="main-downright-left">
                <div id="hpDisplay">HP: 10</div>
            </div>
            <div class="main-downright-right">
            <button id='DML_Open' class="newpage">click me to open the dml command lists</button>

            <script>
                // Get the modal
                var modal = document.getElementById("myModal");

                // Get the button that opens the modal
                var btn = document.getElementById("DML_Open");

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal 
                btn.onclick = function() {
                modal.style.display = "block";
                }

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }

            </script>
            </div>
        </div>
    </div>
</div>

<script src="js/index2.js"></script>
</body>
</html>
