const urlAPI = `https://api.github.com/users`;

export const GET_USER = (user) => {
  return {
    url: urlAPI + `${user}`,
    options: {
      method: "GET",
    },
  };
};
