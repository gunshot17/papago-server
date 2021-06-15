const validator = require("validator");
const connection = require("../db/mysql_connection");


// @desc    회원가입
// @route   POST    /api/v1/naver_users
// @parameters  id,nickname,email
// @response success

exports.createNaverUser = async (req, res, next) => {
    let sns_id = req.body.email;
    let sns_name = req.body.nickname;
    let id = req.body.id;



    // npm validator
    if (!validator.isEmail(sns_id)) {
        res.status(400).json();
        return;
    }



    let query = "insert into naver_info (id , sns_id, sns_name) values ( ? , ? ,? )";
    let data = [id, sns_id, sns_name];
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


};