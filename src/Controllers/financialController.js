import financialServices from "./../Services/financialService.js"

export async function postFinancialEvent (req, res) {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");
    
        const success = financialServices.postFinancialEvent(token)
        if (success === null) {
          return res.sendStatus(400);
        }
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function getFinancialEvent (req, res) {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");
    
        const events = financialServices.getFinancialEvent(token)
        if (events === null) {
          return res.sendStatus(400);
        }
       
        res.send(events.rows);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function getFinancialEventSum (req, res) {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");
    
       
        const sum = financialServices.getFinancialEvent(token)
        if (sum === null) {
          return res.sendStatus(400);
        }

        res.send({ sum });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      } 
}