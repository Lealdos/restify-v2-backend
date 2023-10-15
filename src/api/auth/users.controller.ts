import { Tags, Route, Controller, Get } from "tsoa";
import { performGetUsers } from "./model/auth.model.get.users";
import { userOutput } from "interfaces/auth";

@Tags("Users")
@Route("auth/users")
export class UsersController extends Controller {
	@Get()
	public async getUsers(): Promise<userOutput[]> {
		return await performGetUsers();
	}
}
