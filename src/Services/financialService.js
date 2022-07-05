import jwt from "jsonwebtoken";
import financialRepository from "./../Repositories/financialRepository.js"

async function postFinancialEvent (token) {
    if (!token) {
        return res.sendStatus(401);
      }
  
      let user;
  
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        return res.sendStatus(401);
      }
  
      const { value, type } = req.body;
  
      if (!value || !type) {
        return res.sendStatus(422);
      }
  
      const financialTypes = ["INCOME", "OUTCOME"];
      if (!financialTypes.includes(type)) {
        return res.sendStatus(422);
      }
  
      if (value < 0) {
        return res.sendStatus(422);
      }

      await financialRepository.postFinancialEvent(user.id, value, type);
}

async function getFinancialEvent (token) {
    if (!token) {
        return res.sendStatus(401);
      }
  
      let user;
  
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        return res.sendStatus(401);
      }
  
      const events = await financialRepository.getFinancialEvent(user.id);
      return events; 
}

async function getFinancialEventSum (token) {
    if (!token) {
        return res.sendStatus(401);
      }
  
      let user;
  
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        return res.sendStatus(401);
      }
  
      const events = await financialRepository.getFinancialEventSum(user.id)
     
      const sum = events.rows.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
      return sum;
}

const financialServices = {
    postFinancialEvent,
    getFinancialEvent,
    getFinancialEventSum
}

export default financialServices;