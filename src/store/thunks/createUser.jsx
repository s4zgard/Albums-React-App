import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createUser = createAsyncThunk("users/create", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.person.fullName(),
  });

  return response.data;
});

export { createUser };
