import users from "./users.js";
import auth from "./auth.js";

export default function (app) {
  app.use("/api/users", users);
  app.use("/api/auth", auth);
}
