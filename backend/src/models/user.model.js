import db from "../config/db.js"
export const createUser = async ({first_name,last_name,email,password,role}) => {
    const query = `
        INSERT INTO users
        (first_name, last_name, email, password, role)
        VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [
        first_name,
        last_name,
        email,
        password,
        role
    ]);
    return result;
};

export const findUserByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await db.query(query, [email]);
    return rows[0];
};
export const verifyUser = async (userId) => {
    const query = `
        UPDATE users
        SET is_verified = true
        WHERE id = ?
    `;
    const [result] = await db.query(query, [userId]);
    return result;
};

export const findUserById = async (id) => {

    const query = `
        SELECT * FROM users
        WHERE id = ?
    `;

    const [rows] = await db.query(query, [id]);

    return rows[0];
};