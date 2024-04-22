
export async function _verifyPassword(email, password) {
	// get database connection
	const db = await getDatabaseConnection();

	// find user by email
	const user = await db.collection('users').findOne({ email });

	// check if user exists
	if (!user) {
		return false;
	}

	// compare passwords
	return user.password === password;
}