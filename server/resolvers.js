let users = [];

const resolvers = {
  Query: {
    getUsers: () => users,
  },
  Mutation: {
    createUser: (_, { name, age, email }) => {
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        throw new Error("Email already exists");
      }

      const id = String(users.length + 1);
      const newUser = { id, name, age, email };
      users.push(newUser);
      return newUser;
    },
    deleteUser: (_, { id }) => {
      const index = users.findIndex(user => user.id === id);
      if (index === -1) {
        throw new Error("User not found");
      }
      const [deletedUser] = users.splice(index, 1);
      return deletedUser;
    },
  },
};

module.exports = resolvers;
