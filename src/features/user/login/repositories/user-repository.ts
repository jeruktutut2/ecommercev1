import { PoolClient, QueryResult } from "pg";

export class UserRepository {
    static async findByEmail(client: PoolClient, email: string) {
        const query = `SELECT email, password FROM users WHERE email = $1;`
        const params = [email]
        return await client.query(query, params)
    }
}