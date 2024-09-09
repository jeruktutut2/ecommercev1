import { Pool } from "pg";

export class PostgresUtil {

    private static instance: PostgresUtil
    private static pool: Pool

    private constructor() {
        console.log(new Date().toISOString(), "postgres: connecting to", process.env.ECOMMERCE_POSTGRES_HOST);
        const connectionString = 'postgresql://'+process.env.ECOMMERCE_POSTGRES_USERNAME+':'+process.env.ECOMMERCE_POSTGRES_PASSWORD+'@'+process.env.ECOMMERCE_POSTGRES_HOST+'/'+process.env.ECOMMERCE_POSTGRES_DATABASE
        PostgresUtil.pool = new Pool({
            connectionString: connectionString,
            max: Number(process.env.ECOMMERCE_POSTGRES_MAX_CONNECTION),
            idleTimeoutMillis: Number(process.env.ECOMMERCE_POSTGRES_MAX_IDLETIME) * 1000,
            connectionTimeoutMillis: Number(process.env.ECOMMERCE_POSTGRES_MAX_LIFETIME) * 1000
        })
        console.log(new Date().toISOString(), "postgres: connected to", process.env.ECOMMERCE_POSTGRES_HOST);
    }


    public static async getInstance(): Promise<PostgresUtil> {
        try {
            if (!PostgresUtil.instance) {
                PostgresUtil.instance = new PostgresUtil()
            }
            return Promise.resolve(PostgresUtil.instance)
        } catch(e: unknown) {
            console.log("error when conneting to postgres:", process.env.ECOMMERCE_POSTGRES_HOST);
            return Promise.reject(e)
        }
    }

    public static getPool(): Pool {
        return this.pool
    }
}