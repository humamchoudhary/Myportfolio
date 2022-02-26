<?php
   
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $email_subject = $_POST['subject'];

    //database Connection
    $conn = new mysqli('localhost','root','','contact');
    if($conn->connect_error){
        die('Connection failed: '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into contact(name,email,msg,subject)
        values(?,?,?,?)");
        $stmt->bind_param("ssss",$name,$email,$message,$email_subject);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }

?> 