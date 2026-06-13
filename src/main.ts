import type { PageType } from "./types";

import Handlebars from "handlebars";

import "@/assets/styles/index.scss";

import AsidePanel from "@/components/AsidePanel";
import BaseAvatar from "@/components/BaseAvatar";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseLink from "@/components/BaseLink";
import ChatMessage from "@/components/ChatMessage";
import ChatsListItem from "@/components/ChatsListItem";

import { PLUG_ITEMS } from "@/pages/WelcomePlug";
import { PAGE_CONFIG } from "@/constants/plug";

import formatDate from "@/helpers/formatDate";
import isEqual from "@/helpers/isEqual";
import notEqual from "@/helpers/notEqual";
import setDefault from "@/helpers/setDefault";

Handlebars.registerPartial("aside-panel", AsidePanel); 
Handlebars.registerPartial("base-avatar", BaseAvatar); 
Handlebars.registerPartial("base-button", BaseButton);
Handlebars.registerPartial("base-input", BaseInput); 
Handlebars.registerPartial("base-link", BaseLink); 
Handlebars.registerPartial("chat-message", ChatMessage); 
Handlebars.registerPartial("chats-list-item", ChatsListItem); 

Handlebars.registerHelper("format-date", formatDate);
Handlebars.registerHelper("is-odd", (index: number) => index % 2 !== 0);
Handlebars.registerHelper("is-equal", isEqual);
Handlebars.registerHelper("not-equal", notEqual);
Handlebars.registerHelper("set-default", setDefault);

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
            const dataHref = (event.target as HTMLElement)?.getAttribute("data-href");
            if (!dataHref) return;

            this.state = dataHref as PageType ?? "plug";

            this.render();
        });
    }

    public render() {
        if (!this.appElement || !this.state) return;

        const currentPlug = PAGE_CONFIG[this.state];

        const itemConfig = PLUG_ITEMS.find(i => i.href === this.state)?.config ?? {}; 
        const currentConfig = this.state === "plug" ? { config: PLUG_ITEMS } : itemConfig;

        const template = Handlebars.compile(currentPlug);
        this.appElement.innerHTML = template(currentConfig);
    }
}

const app = new App();
app.render();
