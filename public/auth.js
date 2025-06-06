firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // 현재 페이지가 로그인/회원가입 페이지인지 확인
    const currentPath = window.location.pathname;

    // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
    if (currentPath.includes('signin.html') || currentPath.includes('signup.html')) {
      window.location.href = '/';
      return; // 리다이렉트 후 아래 코드 실행 방지
    }

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
