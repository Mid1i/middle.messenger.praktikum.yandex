import type { PageType } from "@/types";

import { PAGE_CONFIG } from "@/constants/plug";

export default class AppController {
	private state: PageType;
	private appElement: HTMLElement | null;

	constructor() {
		this.state = "plug";
		this.appElement = document.getElementById("app");

		this.setupClick();
	}

	private setupClick() {
		if (!this.appElement) return;

		this.appElement.addEventListener("click", (event: Event) => {
			const dataHref = (event.target as HTMLElement)
				?.closest("[data-href]")
				?.getAttribute("data-href");
			if (!dataHref) return;

			this.state = (dataHref as PageType) ?? "plug";

			this.render();
		});
	}

	public render() {
		if (!this.appElement || !this.state) return;

		const currentPlug = new PAGE_CONFIG[this.state]();

		this.appElement.replaceChildren(currentPlug.element());
	}
}
