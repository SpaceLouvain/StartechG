<script>

    export let form;

    
</script>
<div class="register flex flex-col justify-center items-center h-screen">
	<h1 class="text-3xl font-bold">Register</h1>
	<form
		class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
		method="POST"
		action="/register?/create"
	>
		{#if form?.error}
			<div
				class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong class="font-bold">Error!</strong>
				<span class="block sm:inline">{form.error}</span>
			</div>
		{/if}
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				name="username"
				type="text"
				placeholder="Username"
				required
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
			<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				name="password"
				placeholder="******************"
				required
			/>
			<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
				Confirm Password
			</label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password2"
				type="password"
				name="confirmPassword"
				placeholder="******************"
				required
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Register
			</button>
		</div>
	</form>
</div>