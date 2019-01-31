<?php
include_once("db.php");

if(isset($_POST['submit'])){
  $section=$_POST["section"];
  $link_name=$_POST["link_name"];
  $links=$_POST["link"];
  $details="INSERT INTO links(sections,link_name,links)VALUES('$section','$link_name','$links')";
  if (mysqli_query($connect,$details)) {
    echo "Data Entered Successfully";
}
else{
  echo "Error".mysqli_error($connect);
}
}


 ?>
