firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // 로그인 /회원가입 버튼 없애기
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.signup').style.display = 'none';
    // 로그아웃 보여주기
    document.querySelector('.logout').classList.remove('d-none');

    // 글쓰기 보여주기
    document.querySelector('.write-board').classList.remove('d-none');

    const userInfo = JSON.parse(localStorage.getItem('user'));
    document.querySelector('.userName').innerHTML = userInfo.displayName;
  }
});
