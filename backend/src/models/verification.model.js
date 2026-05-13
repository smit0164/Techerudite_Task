import db from "../config/db.js";

export const createVerificationCode = async ({
    user_id,
    verification_code,
    expires_at
}) => {

    const query = `
        INSERT INTO email_verifications
        (user_id, verification_code, expires_at)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.query(query, [
        user_id,
        verification_code,
        expires_at
    ]);

    return result;
};

export const findVerificationCode = async (user_id,verification_code) => {
    const query = `
        SELECT * FROM email_verifications
        WHERE user_id = ?
        AND verification_code = ?
    `;
    const [rows] = await db.query(query, [
        user_id,
        verification_code
    ]);
    return rows[0];
};
