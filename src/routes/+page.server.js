import { fail, redirect } from '@sveltejs/kit';
import { verifyUser } from '$lib/server/database.js';

export const actions = {
    async verify({ request, cookies }) {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        // verify user
        const userExists = await verifyUser(email, password);

        if (!userExists) {
			throw redirect(302, '/errorPage');
        }

        // set cookie
        cookies.set('userId', userExists.id, { path: '/' }); // specify the path here

        // redirect to home page
        throw redirect(302, '/home');
    }
};