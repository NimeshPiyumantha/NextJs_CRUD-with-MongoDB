const BASE_URL = "http://localhost:3000";
// all user
export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// single user
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    const json = await response.json();

    if (json) return json;
    return {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

// posting a new user
export const addUser = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, options);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Update a new user
export const updateUser = async (userId, formData) => {
  try {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Delete a new user
export const deleteUser = async (userId) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};