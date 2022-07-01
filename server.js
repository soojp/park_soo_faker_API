const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require("@faker-js/faker");

app.use(express.json());

const createUser = {
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  _id: faker.datatype.uuid(),
};

const createCompany = {
  _id: faker.datatype.uuid(),
  name: faker.name.findName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
};

app.get("/api/users/new", (req, res) => {
  res.json(createUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany);
});

app.get("/api/user/company", (req, res) => {
  let object = { newUser: createUser, newCompany: createCompany };
  res.json(object);
});

app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
});
