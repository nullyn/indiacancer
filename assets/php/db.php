<?php
$servername="localhost";
$username="xyz";
$password="xyz12#$";
$database="indian_cancer_society";
$connect=mysqli_connect($servername,$username,$password,$database);

if(!$connect){
  die("connection failed:".mysqli_connect_error());

}

else{
  //echo "connection is successful";
}

 ?>
