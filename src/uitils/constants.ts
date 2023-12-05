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

export class Encryptor {
	constructor() { }

	public encoder(data: string | object | boolean | number) {
		const encode = new TextEncoder();
		return Array.from(new Uint8Array(encode?.encode(JSON.stringify(data))))?.map((byte) => byte?.toString(16).padStart(2, '0')).join('');
	}

	public decoder = (data?: string | any) => {
		const decode = new TextDecoder()
		const decodedValue = decode.decode(Uint8Array.from(data?.match(/.{1,2}/g).map((byte: string) => parseInt(byte, 16))))
		return JSON.parse(decodedValue);
	}
}

enum ILocalStorage {
	// Here we should declare the list of keys where the data is stored in the localStorage.
	"client" = "client",
}
enum ISessionStorage {
	// Here we should declare the list of keys where the data is stored in the localStorage.
}

export class BrowserStorage {
	constructor() { }

	public setLocalStorage(keys: keyof typeof ILocalStorage, value: string | number | object | boolean): void {
		if (typeof window !== 'undefined') {
			localStorage?.setItem(keys, JSON.stringify(value))
		}
	}

	public getLocalStorage(keys: keyof typeof ILocalStorage): any {
		if (typeof window !== 'undefined') {
			try {
				return JSON.parse(localStorage?.getItem(keys) ?? '');
			} catch (e) {
				return localStorage?.getItem(keys);
			}
		}
	}

	public setSessionStorage(keys: keyof typeof ISessionStorage, value: string | number | object | boolean): void {
		if (typeof window !== 'undefined') {
			sessionStorage?.setItem(keys, JSON.stringify(value))
		}
	}

	public getSessionStorage(keys: keyof typeof ISessionStorage): any {
		if (typeof window !== 'undefined') {
			try {
				return JSON.parse(sessionStorage?.getItem(keys) ?? '');
			} catch (e) {
				return sessionStorage?.getItem(keys);
			}
		}
	}

}