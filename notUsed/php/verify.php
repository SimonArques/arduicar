 <?php


if(isset($_POST['submit'])){
    $dbHost     = "localhost";
    $dbUser     = "root";   //User Name
    $dbPass     = "";   // Password
    $dbDatabase = "arduicar"; // Name
    //Connect to the databasse
    $db         = new PDO("mysql:dbname=$dbDatabase;host=$dbHost;port=3306", $dbUser, $dbPass);

    $sql = $db->prepare("SELECT * FROM users
        WHERE username = ? AND
        password = ?
        LIMIT 1");

    //search db user name and password
    $pas = hash('md5', $_POST['password']);
    
    $sql->bindValue(1, $_POST["username"]);
    $sql->bindValue(2, $pas);

    $sql->execute();

    // returns the number of rows found
    if($sql->rowCount() == 1){
        $row                  = $sql->fetch($sql);
        session_start();
        $_SESSION['username'] = $row['username'];
       // $_SESSION['fname']    = $row['first_name'];
       // $_SESSION['lname']    = $row['last_name'];
        $_SESSION['logged']   = TRUE;
        header("Location: users_page.php"); // Modify to go to the page you would like
        exit;
    }else{
        header("Location: login_page.php");
        exit;
    }
    }else{ //If the form button wasn't submitted go to the index page, or login page
    header("Location: index.php");
    exit; 
}