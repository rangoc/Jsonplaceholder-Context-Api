export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

export const fetchCommentsOfPost = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const data = await response.json();
  return data;
};
