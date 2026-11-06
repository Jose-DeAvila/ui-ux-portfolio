import type { ImageMetadata } from "astro";
import softly from "../assets/portfolio/softly.png";
import lotoapp from "../assets/portfolio/app_loteria.png";
import cartoonNetwork from "../assets/portfolio/cartoonnetwork.png";
import harryPotter from "../assets/portfolio/harrypotter.png";
import zenskin from "../assets/portfolio/foto-proyecto-zenskin.png";

export interface Project {
	title: string;
	description: string;
	url: string;
	image: ImageMetadata;
	imageAlt: string;
	badges: string[];
	wide?: boolean;
}

export const projects: Project[] = [
	{
		title: "Landing Page para Agencia Tech 'Softly'",
		description:
			"Diseñada para captar clientes potenciales mediante un mensaje directo y minimalista. Una composición visual que comunica profesionalismo e innovación guiando intuitivamente hacia la conversión.",
		url: "https://www.figma.com/proto/S0mU2pbxosFhRRkO5gTmFi/SOFTLY?t=NiVhO0pUB5rsLn5Z-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1&fuid=1276367966038124991",
		image: softly,
		imageAlt: "Prototipo de landing page para agencia tech Softly",
		badges: ["UI/UX Design", "Landing Page", "Figma"],
		wide: true,
	},
	{
		title: "LotoApp: Lotería Digital",
		description:
			"Diseño de interfaz con jerarquía clara que genera confianza y simplifica la compra de tickets de forma transparente, moderna y atractiva.",
		url: "https://www.figma.com/proto/9zmcq7grpP2yJbYnZSF64j/APP-DE-SORTEO?node-id=3-3&p=f&t=iBZMrFZrqPRUmodC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3",
		image: lotoapp,
		imageAlt: "Prototipo de aplicación móvil LotoApp",
		badges: ["Web App", "Fintech / Lottery"],
		wide: true,
	},
	{
		title: "Cartoon Network: Plataforma de Aventuras",
		description:
			"Experiencia basada en tarjetas visuales de inspiración para explorar destinos animados y simplificar la reserva de aventuras interactivas.",
		url: "https://www.figma.com/proto/fDj9vstmWfpt9JceajZosT/Landing-cartoon-network?node-id=0-1&t=NJXqrQz1x9pYwHoK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&fuid=1276367966038124991",
		image: cartoonNetwork,
		imageAlt: "Prototipo de landing page Cartoon Network",
		badges: ["Landing Page", "Cartoon Network"],
	},
	{
		title: "Landing Page: Harry Potter",
		description:
			"Landing page inspirada en el universo mágico de Hogwarts, combinando elementos dinámicos, una estética visual atractiva y navegación intuitiva.",
		url: "https://www.figma.com/proto/x5OJECxwmytEmIwM49aDMB/Landing-Harry-Potter?node-id=30-14&t=UqXOhDZK4zbDxR5R-0&scaling=min-zoom&content-scaling=fixed&page-id=30%3A10",
		image: harryPotter,
		imageAlt: "Prototipo de landing page Harry Potter",
		badges: ["Storytelling", "Landing Page"],
	},
	{
		title: "Zenskin Botánica",
		description:
			"Experiencia de cuidado facial con ficha de producto interactiva, selección fluida de presentaciones y flujo de compra directa optimizado.",
		url: "https://www.figma.com/proto/4SyzT6XmlA06LQZlWrz434/Zenskin?node-id=0-1&p=f&t=DNgwCbTafJHD1j3e-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=349%3A102&fuid=1276367966038124991",
		image: zenskin,
		imageAlt: "Prototipo Zenskin Botánica con ficha de producto",
		badges: ["E-commerce", "UI/UX", "Figma"],
		wide: true,
	},
];
