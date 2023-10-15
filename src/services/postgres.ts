import knex, { Knex } from "knex";


const localConnection = {
	host: "localhost",
	port: 5438,
	user: "postgres",
	password: "postgres",
	database: "restify",
};

export const retrieveConnDetails = async (): Promise<Knex.StaticConnectionConfig> => {
	return localConnection;
};

export const client = knex({
	client: "postgresql",
	connection: async () => {
		return await retrieveConnDetails();
	},
	searchPath: ["restify", "public"],
});
