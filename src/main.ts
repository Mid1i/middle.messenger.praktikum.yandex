import type { PageType } from "./types";

import Handlebars from "handlebars";

import "@/assets/styles/index.scss";

import AsidePanel from "@/components/AsidePanel";
import BaseAvatar from "@/components/BaseAvatar";
import BaseButton from "@/components/BaseButton";
import BaseForm from "@/components/BaseForm";
import BaseInput from "@/components/BaseInput";
import BaseLink from "@/components/BaseLink";
import BasePopup from "@/components/BasePopup";
import ChatMessage from "@/components/ChatMessage";
import ChatsListItem from "@/components/ChatsListItem";

import { PAGE_CONFIG } from "@/constants/plug";

import registerComponent from "@/helpers/registerComponent";
import formatDate from "@/helpers/formatDate";
import isEqual from "@/helpers/isEqual";
import notEqual from "@/helpers/notEqual";
import setDefault from "@/helpers/setDefault";

Handlebars.registerHelper("format-date", formatDate);
Handlebars.registerHelper("is-odd", (index: number) => index % 2 !== 0);
Handlebars.registerHelper("is-equal", isEqual);
Handlebars.registerHelper("not-equal", notEqual);
Handlebars.registerHelper("set-default", setDefault);

registerComponent(AsidePanel);
registerComponent(BaseAvatar);
registerComponent(BaseButton);
registerComponent(BaseForm);
registerComponent(BaseInput);
registerComponent(BaseLink);
registerComponent(BasePopup);
registerComponent(ChatMessage);
registerComponent(ChatsListItem);

class App {
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

const app = new App();
app.render();
