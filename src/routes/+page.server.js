import {getDatabase} from "$lib/server/database.js";

import * as bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

/**
 * @type {import('./$types').Actions}
 */
export const actions = {
	async verify({ request, cookies }) {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const db = await getDatabase();
		const user = await new Promise((resolve, reject) => {
			db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
				if (err) return reject(err);
				resolve(row);
			});
		});

		if (!user) {
			throw redirect(302, '/login?error=wrong_details');
		}

		const passwordsMatch = await bcrypt.compare(password, user.password);

		if (passwordsMatch) {
			cookies.set('userId',userId,  { path: '/' });
			throw redirect(302, '/');
		}

		throw redirect(302, '/login?error=wrong_details');
	}
};

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load({ url }) {
	return {
		error: url.searchParams.get('error')
	};
}