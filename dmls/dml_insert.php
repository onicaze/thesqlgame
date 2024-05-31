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
    <p>This function purpose is to add a row into your table</p>
<ul>
    <li>
        <p id='lines'>"INSERT INTO companies(ID, Name, Age, Gender, Address) values (01, Andy, 32, Male, Jalan Cibadak no. 50);"</p>
        <br>
        This code shows that you are inserting a row into companies which defines the column seperately.
    </li><br>
    <li>
        <p id='lines'>"INSERT INTO companies(Name, Age, Gender, Address) values (Andy, 32, Male, Jalan Cibadak no. 50); "</p>
        <br>
        The column "ID" didn't get mention cause it's auto generated. If in your database there is this specific
        function, just don't fill it.
    </li><br>
    <li>
        <p id='lines'>"INSERT INTO companies values(Andy, 32, Male, Jalan Cibadak no.50); "</p>
        <br>
        This is the simplest way to insert data. However, make sure all datas have a correct index.
    </li>
</ul>
