const endPoints = {
  getAll: (page) => {
    return {
      url: `/posts/?page=${page}`,
    };
  },
  getOne: (id) => {
    return {
      url: `/posts/${id}`,
    };
  },
  delOne: (id) => {
    return {
      url: `/posts/${id}`,
      options: {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      },
    };
  },
  addOne: (sentData) => {
    return {
      url: `/posts/`,
      options: {
        method: 'POST',
        body: JSON.stringify(sentData),
        headers: { "Content-Type": "application/json" },
      },
    };
  },
  updateOne: (id,newData) => {
    return {
      url: `/posts/${id}`,
      options: {
        method: 'PATCH',
        body: JSON.stringify(newData),
        headers: { "Content-Type": "application/json" },
      },
    };
  },
};

export default endPoints;
