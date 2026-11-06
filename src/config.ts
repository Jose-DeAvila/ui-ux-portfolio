/**
 * URL base de la API del formulario de contacto (función serverless en Vercel).
 * Se puede sobreescribir con PUBLIC_CONTACT_API_URL en el build.
 */
export const CONTACT_API_BASE: string =
	import.meta.env.PUBLIC_CONTACT_API_URL ?? "https://mi-portafolio-tau-liart.vercel.app";
