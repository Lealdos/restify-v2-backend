import { HttpError } from "express-openapi-validator/dist/framework/types";
import { UserOutput } from "interfaces/auth";
import { client } from "services/postgres";

export const performGetUsers = async (): Promise<UserOutput[]> => {
	const query = await client("auth.users as u").select(
		"u.id",
		"u.firstname",
		"u.lastname",
		"u.avatar",
	);

	if (query === undefined) {
		throw new HttpError({
			status: 404,
			message: "Users not found",
			name: "Users not found",
			path: "auth/users",
		});
	}

	return query;
};