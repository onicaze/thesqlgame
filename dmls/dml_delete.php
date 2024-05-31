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

<p>This function purpose is to delete rows of datas</p>
<ul>
    <li>
        <p id='lines'>"DELETE from Companies;"</p>
        <br>
        This code shows that you want to delete all data from companies. However, if you have auto-increment,
        the numeration will not restart from 1, instead it will continue from the previous number that you
        deleted.
    </li><br>
    <li>
        <p id='lines'>"TRUNCATE table companies;"</p>
        <br>
        This code shows that you want to delete all data from companies. However, it will restart numeration
        from 1 if you have auto increment. 
    </li><br>
</ul>
