/** Efectos visuales: destellos que siguen al mouse y aparición de secciones al hacer scroll. */

const SPARKLE_COLORS = ["#FFF0F5", "#E6F4F1", "#9affa0", "#f989a8", "#c4f542"];

function initSparkles(): void {
	const container = document.getElementById("sparkle-container");
	if (!container) return;

	window.addEventListener("mousemove", (e: MouseEvent) => {
		// Solo ~15% de los movimientos generan destello, para cuidar el rendimiento.
		if (Math.random() > 0.15) return;

		const sparkle = document.createElement("div");
		sparkle.classList.add("sparkle");
		sparkle.style.left = `${e.pageX}px`;
		sparkle.style.top = `${e.pageY}px`;

		const size = Math.random() * 8 + 4;
		sparkle.style.width = `${size}px`;
		sparkle.style.height = `${size}px`;

		const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
		sparkle.style.setProperty("--sparkle-color", color);

		container.appendChild(sparkle);
		setTimeout(() => sparkle.remove(), 800);
	});
}

function initReveal(): void {
	const elements = document.querySelectorAll<HTMLElement>(".reveal");

	const check = (): void => {
		const triggerBottom = window.innerHeight * 0.88;
		elements.forEach((element) => {
			if (element.getBoundingClientRect().top < triggerBottom) {
				element.classList.add("active");
			}
		});
	};

	window.addEventListener("scroll", check, { passive: true });
	check();
}

initSparkles();
initReveal();
