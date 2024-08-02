const User = require('../models/User')

async function login(req,res){
    const data = req.body;
    console.log(data.username);
    try {
      const user = await User.getOneByUserName(data.username);
      if(!user) { throw new Error('No user with this username') }

      if (user.password === data.password) {
            res.status(200).json({
                success: true
            });
      } 
      else {
        throw new Error('User could not be authenticated')  
      }
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
}
async function register(req, res) {
  try {
    const data = req.body;
    const result = await User.create(data);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = { login, register }