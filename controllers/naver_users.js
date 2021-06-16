const validator = require("validator");
const connection = require("../db/mysql_connection");


// @desc    회원가입
// @route   POST    /api/v1/naver_users
// @parameters  id,nickname,email
// @response success

exports.createNaverUser = async (req, res, next) => {
    let email = req.body.email;
    let nickname = req.body.nickname;
    let id = req.body.id;



    // npm validator
    if (!validator.isEmail(email)) {
        res.status(400).json();
        return;
    }



    let query = "insert into users (id , email, nickname) values ( ? , ? ,? )";
    let data = [id, email, nickname];
    let user_id;

    const conn = await connection.getConnection();
    await conn.beginTransaction();

    try {
        [result] = await conn.query(query, data);
        user_id = result.insertId;
    } catch (e) {
        await conn.rollback();
        res.status(500).json();
        return;
    }

    res.status(200).json({ success: true });

};