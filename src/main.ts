import type { PageType } from "./types";

import Handlebars from "handlebars";

import "@/assets/styles/index.scss";

import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import BaseLink from "@/components/BaseLink";

import { PLUG_ITEMS } from "@/pages/WelcomePlug";
import { PAGE_CONFIG } from "@/constants/plug";

Handlebars.registerPartial("base-input", BaseInput); 
Handlebars.registerPartial("base-button", BaseButton); 
Handlebars.registerPartial("base-link", BaseLink); 

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