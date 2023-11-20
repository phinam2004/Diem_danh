document.getElementById('submit').addEventListener('click', function() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  if (nameInput.value === '') {
    nameInput.nextElementSibling.style.display = 'inline';
  } else {
    nameInput.nextElementSibling.style.display = 'none';
  }

  if (emailInput.value === '') {
    emailInput.nextElementSibling.style.display = 'inline';
  } else {
    emailInput.nextElementSibling.style.display = 'none';
  }

  if (nameInput.value !== '' && emailInput.value !== '') {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'attendance.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
        // Thực hiện các hành động khác sau khi điểm danh thành công
      }
    };
    xhr.send('name=' + encodeURIComponent(nameInput.value) + '&email=' + encodeURIComponent(emailInput.value));
  }
});
