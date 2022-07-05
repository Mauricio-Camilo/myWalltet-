import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "./../Repositories/authRepository.js";

async function postSignUp (name, email, password) {

    if (!name || !email || !password) {
        return res.sendStatus(422);
      }
  
      const existingUsers = await authRepository.checkUser(email)

      if (existingUsers.rowCount > 0) {
        return res.sendStatus(409);
      }
  
      const hashedPassword = bcrypt.hashSync(password, 12);

      await authRepository.registerUser(name, email, hashedPassword);
}

async function postSignIn (email, password ) {
    if (!email || !password) {
        return res.sendStatus(422);
      }
  
      const { rows } = await authRepository.getByEmail(email);
      const [user] = rows;
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401);
      }
  
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );

      return token;
}

const authService = {
    postSignUp,
    postSignIn
}

export default authService;