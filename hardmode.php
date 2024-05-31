<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="css/hardmode.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet">
    <title>Grid Layout</title>
</head>
<body>

<audio id="backgroundMusic" autoplay loop>
    <source src="music/hmboss.mp3" type="audio/mpeg">
</audio>

<div class="container1">
    <div class="main-left">
        <div class="main-topleft"><img src="image/hm_boss.png" alt="Image">
        <div id="correctHpDisplay">boss HP: 10</div>
    </div>
        <div class="main-downleft">
            <form id="mathForm" onsubmit="checkAnswer(event)">
                <input type="text" id="answer" name="answer" placeholder="type your answer..." autofocus>
            </form>
        </div>
    </div>
    <div class="main-right">
        <div class="main-topright">
            <label for="answer"><div class="question">select all data from the companies table</div></label>
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
                <div id="hpDisplay">HP: 1</div>
            </div>
            <div class="main-downright-right">
                no dml commands list lol
            </div>
        </div>
    </div>
</div>

<script src="js/hardmode.js"></script>
</body>
</html>
