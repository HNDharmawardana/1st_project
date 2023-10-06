<?php
    if(isset($_POST['fname'])){
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $age=$_POST['age'];
        $faname=$_POST['faname'];
        $moname=$_POST['moname'];
        $dob=$_POST['dob'];

        $sg = fopen("$fname.txt","w")or die("File open failed!");
        $data = "
            First Name :$fname,
            Last Name:$lname,
            Age:$age,
            Father Name:$faname,
            Mother Name:$moname,
            Date of Birth:$dob,";

        if(fwrite($sg,$data) === "FALSE"){
            echo "$fname.txt creation failed!";
        }
        else{
            echo "$fname.txt was creation successfully!";
        }
        fclose($sg);
    }else{
        echo "Access Denied!";
    }
?>