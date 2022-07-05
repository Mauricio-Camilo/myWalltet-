import authService from "../Services/authService.js";

export async function signUp (req, res) {
    try {

        const { name, email, password } = req.body;

        const success = authService.postSignUp(name, email, password);

        if (success === null) {
          return res.sendStatus(400);
        }
    
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function signIn (req, res) {
    try {
        const { email, password } = req.body;
    
        const token = authService.postSignIn(email, password);

        if (token === null) {
          return res.sendStatus(400);
        }
        res.send({
          token,
        });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}


