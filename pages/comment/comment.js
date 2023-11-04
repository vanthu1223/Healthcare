var comments = [];

function submitComment() {
  var commentText = document.getElementById('commentInput').value;

  if (commentText.trim() !== '') {
    var comment = {
      name: "John Doe",
      text: commentText,
      timestamp: new Date()
    };

    comments.push(comment);

    // Lưu comments vào local storage
    localStorage.setItem('comments', JSON.stringify(comments));

    displayComments();

    document.getElementById('commentInput').value = '';
  }
}

function deleteComment(index) {
  comments.splice(index, 1);

  // Lưu comments đã cập nhật vào local storage
  localStorage.setItem('comments', JSON.stringify(comments));

  displayComments();
}

function displayComments() {
  var commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '';

  // Kiểm tra xem đã có comments trong local storage chưa
  var storedComments = localStorage.getItem('comments');
  if (storedComments) {
    comments = JSON.parse(storedComments);
  }

  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];

    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    var nameElement = document.createElement('span');
    nameElement.classList.add('comment-name');
    nameElement.innerText = comment.name;

    var textElement = document.createElement('span');
    textElement.classList.add('comment-text');
    textElement.innerText = comment.text;

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('data-index', i);
    deleteButton.addEventListener('click', function(event) {
      var index = event.target.getAttribute('data-index');
      deleteComment(index);
    });

    commentElement.appendChild(nameElement);
    commentElement.appendChild(document.createElement('br'));
    commentElement.appendChild(textElement);
    commentElement.appendChild(deleteButton);
    commentsContainer.appendChild(commentElement);
  }
}

// Gọi hàm displayComments để hiển thị các comments đã lưu trong local storage sau khi tải lại trang
displayComments();