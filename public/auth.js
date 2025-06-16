const userInfo = JSON.parse(localStorage.getItem('user'));

if (userInfo && document.querySelector('.userName')) {
  document.querySelector('.userName').innerHTML = userInfo.displayName;
}

// 현재 페이지가 로그인/회원가입 페이지인지 확인
const currentPath = window.location.pathname;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // querySelector
    const signin = document.querySelector('.signin');
    const signup = document.querySelector('.signup');
    const logout = document.querySelector('.logout');
    const writeBoard = document.querySelector('.write-board');

    // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
    if (currentPath.includes('signin.html')) {
      window.location.href = '/';
      return;
    }

    // 로그아웃
    if (logout) {
      logout.addEventListener('click', handleLogout);
    }

    // 로그인 /회원가입 버튼 없애기
    signin.style.display = 'none';
    signup.style.display = 'none';

    // 로그아웃 보여주기
    logout.classList.remove('d-none');

    // 글쓰기 보여주기
    writeBoard.classList.remove('d-none');
  } else {
    // 로그인X 상태에서 업로드 페이지 접근 시 메인으로 리다이렉트
    if (currentPath.includes('upload.html')) {
      window.location.href = '/signin.html';
      return; // 리다이렉트 후 아래 코드 실행 방지
    }
  }
});

// 로그아웃
function handleLogout(e) {
  e.preventDefault(); // 기본 링크 동작 방지

  firebase
    .auth()
    .signOut()
    .then(res => {
      console.log('success logout');
      localStorage.removeItem('user');
      window.location.href = '/';
    })
    .catch(error => console.log(error));
  localStorage.removeItem('user');
}
