<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "diem_danh";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}

if (isset($_POST['name']) && isset($_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    if (!empty($name) && !empty($email)) {
        $sql = "INSERT INTO students (name, email) VALUES ('$name', '$email')";

        if ($conn->query($sql) === TRUE) {
            echo "Điểm danh thành công!";
        } else {
            echo "Lỗi: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Vui lòng nhập đầy đủ thông tin!";
    }
}

$conn->close();
?>