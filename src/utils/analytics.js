export const getUserActivity = (messages) => {
  const userMap = {};

  messages.forEach(msg => {
    userMap[msg.user_name] = (userMap[msg.user_name] || 0) + 1;
  });

  return Object.entries(userMap)
    .sort((a, b) => b[1] - a[1]); // descending
};