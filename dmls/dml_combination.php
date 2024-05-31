<head>
    <style>
        body{
            overflow: auto;
        }
        #lines {
        font-weight:bold;
        color: #F8BB41;
        }
    </style>
</head>
<body>
<p>Basically, this allows you to combine many criteria at once</p>
<ul>
    <li>
        <p id='lines'>"SELECT COUNT(Name) from workers WHERE workerid < 12 AND Name LIKE '%is%'"</p>
        <br>
        This code implies that you want to count how many workers that their id is below 12 and in their name, they have the letter combination of 'is'. 
    </li><br>
    <li>
        (The column doesn't exist)
        <p id='lines'>"SELECT AVG(income) from workers WHERE workerid > 11 AND income > 300000'</p>
        <br>
        This code shows that you want to find the average income from workers, which their ID is above 11 and their income must be above 300000.
    </li><br>
    <li>
        <p id='lines'>"SELECT * from companies WHERE address NOT LIKE 'jln.%'"</p>
        <br>
        NOT LIKE refers to anything that doesn't have it. In this case, you wanted to show all companies information which in their address doesn't contain 'jln.' in the beginning, notified by the % only at the end. 
    </li><br>
    <li>
        <p id='lines'>"SELECT * from workers WHERE income = 450000 OR Age > 12"</p>
        <br>
        This code shows you all information for workers where their income is above 450000 or it could just be their age above 12.
    </li><br>
    <li>
        <p id='lines'>"SELECT COUNT(Age) from companies;"</p>
        <br>
        This code shows that you show the amount of data with Age in companies. 
    </li><br>
</ul>
