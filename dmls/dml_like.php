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
    <link rel="stylesheet" href="dml.css">
</head>
<body>
<p>This function purpose is to do things with strings</p>
<ul>
    <li>
        <p id='lines'>"SELECT * from companies WHERE Name LIKE '%D';"</p>
        <br>
        This code shows that you select everything from companies where the name has the character 'D' at the
        end of it. 
    </li><br>
    <li>
        <p id='lines'>"SELECT * from companies WHERE Name LIKE '%A%';"</p>
        <br>
        This code shows that you select everything from companies where the name consist of the letter 'A' somewhere 
        in the middle of the column of NAME
    </li><br>
    <li>
        <p id='lines'>"SELECT * from companies WHERE Name LIKE '_A';"</p>
        <br>
        This code shows that you select everything from companies where the name consist of the letter 'A' is the 
        second character from the column of NAME. 
    </li>
</ul>
