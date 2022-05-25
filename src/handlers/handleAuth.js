import { login } from "./login";
import { logout } from "./logout";
import { me } from "./me";
import { register } from "./register";
import { callback } from "./callback";

export default () =>
  async function handler(req, res) {
    let {
      query: { kindeAuth: route },
    } = req;

    route = Array.isArray(route) ? route[0] : route;

    switch (route) {
      case "login":
        return await login(req, res);
      case "register":
        return await register(req, res);
      case "me":
        return await me(req, res);
      case "logout":
        return await logout(req, res);
      case "kinde_callback":
        return await callback(req, res);
      default:
        return res.status(404).end();
    }
  };
