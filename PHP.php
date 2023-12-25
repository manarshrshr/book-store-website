<?php
$firstname=$_REQUEST['firstname'];
$secondname=$_REQUEST['secondname'];
$email=$_REQUEST['email'];
$address=$_REQUEST['address'];
$message=$_REQUEST['message'];

if(isset($_POST['btntest'])){
    $host="localhost";
    $user ="root";
    $password ="";
    $db ="DB_st";
    @$connection = mysqli_connect($host, $user, $password, $db);
    $insert = "insert into student values('$firstname', '$secondname', '$email', '$address', '$message')";
    mysqli_query($connection,$insert);
    if($connection){
        echo("<h1 style='color:green;'>Your Registration is Done!</h1>");
    }
    else{
        echo("<h1 style='color:red;'>Your Registration is Failed!</h1>");
    }
}
?>