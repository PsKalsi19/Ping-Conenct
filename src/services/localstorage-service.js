const AUTH = "auth";
const USER = "user";

export const setUserToLocalStorage = (payload) =>
  localStorage.setItem(USER, JSON.stringify(payload));

export const setAuthToLocalStorage = (payload) =>
  localStorage.setItem(AUTH, payload);

export const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(USER) ?? "{}");

export const getAuthFromLocalStorage = () => localStorage.getItem(AUTH);

export const handleLogout = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(AUTH);
};
