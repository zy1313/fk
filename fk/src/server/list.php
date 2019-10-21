<?php
header("Content-type:text/html;charset=utf-8");
$db=mysqli_connect("127.0.0.1","root","","fanke");
$sql="SELECT * FROM datalist";
mysqli_query($db,"set names 'utf8'");
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($db,MYSQLI_ASSOC);
echo json_encode($data,true);
?>