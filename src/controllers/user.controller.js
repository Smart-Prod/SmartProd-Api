import * as userService from "../services/user.service.js";
import { success, error } from "../utils/response.util.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return success(res, users);
  } catch (err) {
    return error(res, err.message);
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser({ name, email });
    return success(res, user, "Usuário criado com sucesso!");
  } catch (err) {
    return error(res, err.message);
  }
};
