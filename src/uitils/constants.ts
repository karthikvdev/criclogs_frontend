export const ROUTES = {
	LOGIN: "/accounts/login",
	REGISTER: "/accounts/register",
	DASHBOARD: (userId: string) => {
		return `/${userId}/dashboard`
	},
	SETTINGS: (userId: string) => {
		return `/${userId}/settings`
	}
}

export const STATUS = {
	SUCCESS: 'success',
	FAILURE: 'failure',
	WARNING: "warning"
}

