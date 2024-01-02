document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const customCursor = document.createElement('div');
  const follower = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  follower.classList.add('follower');
  container.appendChild(customCursor);
  container.appendChild(follower);

  document.addEventListener('mousemove', function (e) {
    const cursorSize = customCursor.getBoundingClientRect();
    const followerSize = follower.getBoundingClientRect();

    const cursorX = e.clientX - cursorSize.width / 2; // Adjusting for cursor center
    const cursorY = e.clientY - cursorSize.height / 2; // Adjusting for cursor center

    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';

    follower.style.left = e.clientX - followerSize.width / 2 + 'px';
    follower.style.top = e.clientY - followerSize.height / 2 + 'px';
  });

  const hoverText = document.querySelector('.hover-text');
  hoverText.addEventListener('mouseenter', function () {
    customCursor.style.display = 'block';
    follower.style.display = 'block';
  });
  hoverText.addEventListener('mouseleave', function () {
    customCursor.style.display = 'none';
    follower.style.display = 'none';
  });
});
