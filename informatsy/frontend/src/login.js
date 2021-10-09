import { async } from "@firebase/util";
import { cookie } from "cookie";

const login = async (req, res) => {
  if (req.method === "POST") {
    res.send(200);
  }
};
export default login;
