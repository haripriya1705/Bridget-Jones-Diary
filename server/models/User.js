const db = require('../db/connect.js')

class User{
    constructor({username, password, email, postcode}) {
        this.username = username
        this.password = password
        this.email = email
        this.postcode = postcode
    }
    static async getOneByUserName(username){        
        const response = await db.query("SELECT * FROM userdetail WHERE LOWER(user_name) = LOWER($1)", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }
    static async create(data) {
        const { username, password, email, phonenumber, postcode } = data;
        
        let response = await db.query("INSERT INTO userdetail (user_name, password) VALUES ($1, $2) RETURNING user_id;",
            [username, password]);
        
        const newId = response.rows[0].user_id;

        let response2 = await db.query("INSERT INTO userresgistration (email, phone_number, postcode,user_id) VALUES ($1, $2, $3, $4) RETURNING user_id;",
            [email, phonenumber, postcode, newId]);

        // const newUser = await User.getOneById(newId);
        return new User(response2);
    }

}
module.exports = User