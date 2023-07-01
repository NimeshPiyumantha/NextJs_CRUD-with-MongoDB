const BASE_URL = "http://localhost:3000";
// all user
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

// single user
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};


