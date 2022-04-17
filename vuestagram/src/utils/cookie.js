// token save
function saveAuthToCookie(value) {
  document.cookie = `auth=${value}`;
}

// user save
function saveUserToCookie(value) {
  document.cookie = `vuestagram_user=${value}`;
}

// token load
function getAuthFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/, '$1');
}

// user load
function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)vuestagram_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// del
function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
