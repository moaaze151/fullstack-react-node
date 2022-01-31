import endPoints from "../endPoints";
const { getAll, getOne, delOne, addOne, updateOne } = endPoints;
const requests = {
  getAll: async (page) => {
    const { url } = getAll(page);
    const res = await fetch(url);
    const data = await res.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
  getOne: async (id) => {
    const { url } = getOne(id);
    const res = await fetch(url);
    const data = await res.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
  deleteOne: async (id) => {
    const { url, options } = delOne(id);
    const res = await fetch(url, options);
    const data = await res.json();
    return new Promise((resolve, reject) => {
      data ? resolve(data) : reject(undefined);
    });
  },
  addOne: async (sentData) => {
    const { url, options } = addOne(sentData);
    const response = await fetch(url, options);
    const returnedData = await response.json();
    return new Promise((resolve, reject) => {
      returnedData
        ? resolve({ response: response, data: returnedData })
        : reject(undefined);
    });
  },
  updateOne: async (id, newData) => {
    const { url, options } = updateOne(id, newData);
    console.log( "====>>>",url,options);
    const response = await fetch(url, options);
    const data = await response.json();
    return new Promise((resolve, reject) => {
      data
        ? resolve({ response: response, data: data })
        : reject(undefined);
    });
  },
};

export default requests;
// deleteOne: async (id) => {
//   const { url } = getOne(id);
//   const options = {
//     method: "DELETE",
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   const res = await fetch(url, options);
//   const data = await res.json();
//   return new Promise((resolve, reject) => {
//     data ? resolve(data) : reject(undefined);
//   });
// },
