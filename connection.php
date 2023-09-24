<?php
const HOST = "localhost";
const USERNAME = "root";
const PASSWORD = "";
const DATABASE = "quanlyvemaybay";

function connection()
{
    $connect = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE);
    if (mysqli_error($connect)) {
        die("Connection failed");
    }
    mysqli_set_charset($connect, "utf8");
    return $connect;
}

function Query($sql)
{
    $connect = connection();
    $query = mysqli_query(connection(), $sql);
    $connect->close();
    return $query;
}