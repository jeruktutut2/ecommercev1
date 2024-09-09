import { LoginRequest } from "../models/login-request";
import { Validation } from "../../../../commons/validations/validation";
import { LoginValidationSchema } from "../validation-schemas/login-validation-schema";
import { errorHandler } from "@/commons/exceptions/error-exeption";
import { PostgresUtil } from "@/commons/utils/postgres-utils";
import { PoolClient } from "pg";
import { UserRepository } from "../repositories/user-repository";
import { ResponseException } from "@/commons/exceptions/response-exception";
import { setDataMessageResponse, setErrorMessages, setErrorMessagesResponse, setResponse } from "@/commons/helpers/response-helper";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export class LoginService {
    static async login(loginRequest: LoginRequest) {
        let client: PoolClient | null = null
        try {
            Validation.validate(LoginValidationSchema.login, loginRequest)
            await PostgresUtil.getInstance()
            client = await PostgresUtil.getPool().connect()
            const result = await UserRepository.findByEmail(client, loginRequest.email)
            if (result.rowCount != 1) {
                const message = "wrong email or password"
                throw new ResponseException(400, setErrorMessages(message), message)
            }

            const match = await bcrypt.compare(loginRequest.password, result.rows[0].password)
            if (!match) {
                const message = "wrong email or password"
                throw new ResponseException(400, setErrorMessages(message), message)
            }
            return setResponse(uuidv4(), null)
        } catch(e: unknown) {
            return errorHandler(e)
        } finally {
            if (client) {
                client.release()
            }
        }
    }
}