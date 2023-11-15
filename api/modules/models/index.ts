import { initModels } from './tables/init-models';
import * as dotenv from 'dotenv';
import { DataModel as DM } from 'data-model/db';
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_TIMEZONE, DB_DIALECT } = process.env;

const config = {
	name: DB_NAME,
	user: DB_USER,
	password: DB_PASS,
	host: DB_HOST,
	timeZone: DB_TIMEZONE,
	dialect: DB_DIALECT,
	dialectOptions: {
		options: {
			encrypt: false,
			trustServerCertificate: true,
		},
	},
	initModels,
};

export /*bundle*/ const DataModel = DM.get(config);
