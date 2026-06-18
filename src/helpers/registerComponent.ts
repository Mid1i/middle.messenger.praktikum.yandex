import type { HelperOptions } from "handlebars";

import Handlebars from "handlebars";

let uniqueId = 0;

export default function registerComponent(Component) {
	Handlebars.registerHelper(
		Component.componentName,
		function ({ hash, data }: HelperOptions) {
			const dataAttribute = `data-component-hbs-id="${++uniqueId}"`;
			const component = new Component(hash as Props);

			if ("ref" in hash) {
				(data.root.__refs = data.root.__refs || {})[hash.ref] = component.element();
			}

			(data.root.__children = data.root.__children || []).push({
				component,
				embed(node: DocumentFragment) {
					const placeholder = node.querySelector(`[${dataAttribute}]`);

					if (!placeholder) {
						throw new Error(`Can't find data-id for component ${Component.componentName}`);
					}

					const element = component.element();
					placeholder.replaceWith(element);
				}
			});

			return `<div ${dataAttribute}></div>`;
		}
	)
}