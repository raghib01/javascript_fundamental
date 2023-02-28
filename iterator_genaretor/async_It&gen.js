// const axios = require("axios").default;

// async function getUsers() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const { data: users } = await axios.get(url);
//   return users;
// }

// async function* getUsersPost(users) {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   for (let i = 0; i < users.length; i++) {
//     const { data: posts } = await axios.get(`${url}?useId=${users[i].id}`);
//     yield posts;
//   }
// }

// getUsers()
//   .then(async (users) => {
//     const userIterator = await getUsersPost(users);
//     // await userIterator.next();
//     // await userIterator.next();
//     // console.log((await userIterator.next()).value);

//     for await (let i of getUsersPost(users)) {
//       console.log(i.map((data) => data.title));
//     }
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// same works in get data....

const axios = require("axios").default;

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);
  return users.map((userId) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?usersId=${userId.id}`)
  );
}

(async () => {
  const user = await getUsers();
  for await (let i of user) {
    console.log(i.data.map((post) => post.title));
  }
})();
