/** Envío del formulario de contacto a la función serverless (/api/contact). */

const form = document.getElementById("contactForm") as HTMLFormElement | null;

if (form) {
	const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
	const formStatus = document.getElementById("contact-status")!;
	const submitLabel = submitButton.textContent ?? "";
	const apiBase = document.querySelector<HTMLMetaElement>('meta[name="contact-api-base"]')?.content.trim() ?? "";
	const contactApiUrl = `${apiBase.replace(/\/+$/, "")}/api/contact`;

	const field = (name: string): string => (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "";

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		submitButton.disabled = true;
		submitButton.textContent = "Enviando...";
		formStatus.dataset.state = "loading";
		formStatus.textContent = "Enviando tu mensaje...";

		try {
			const response = await fetch(contactApiUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: field("name"),
					email: field("email"),
					message: field("message"),
					website: field("website"),
				}),
			});

			const contentType = response.headers.get("content-type") ?? "";
			if (!contentType.toLowerCase().includes("application/json")) {
				throw new Error("El servidor de contacto devolvió una respuesta inesperada. Inténtalo más tarde.");
			}

			let result: { message?: string };
			try {
				result = await response.json();
			} catch {
				throw new Error("No pudimos leer la respuesta del servidor. Inténtalo de nuevo.");
			}

			if (!response.ok) {
				throw new Error(result.message || "No se pudo enviar el mensaje.");
			}

			formStatus.dataset.state = "success";
			formStatus.textContent = result.message ?? "¡Gracias! Tu mensaje fue enviado.";
			form.reset();
		} catch (error) {
			formStatus.dataset.state = "error";
			formStatus.textContent =
				error instanceof TypeError
					? "No pudimos conectar con el servidor de contacto. Inténtalo de nuevo en unos minutos."
					: error instanceof Error
						? error.message
						: "No se pudo enviar el mensaje. Inténtalo más tarde.";
		} finally {
			submitButton.disabled = false;
			submitButton.textContent = submitLabel;
		}
	});
}
