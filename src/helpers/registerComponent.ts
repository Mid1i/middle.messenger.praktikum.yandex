import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type BaseBlock from "@/components/BaseBlock";
import type { HelperOptions } from "handlebars";

import Handlebars from "handlebars";

type ComponentConstructor<Props extends IBaseBlockOwnProps> = {
	new (props: Props): BaseBlock<Props>;
	componentName: string;
};

interface IComponentHelperOptions<Props> {
	hash: Props & { ref?: string };
	data?: {
		root: IBaseBlockOwnProps;
	};
}

let uniqueId = 0;

export default function registerComponent<Props extends IBaseBlockOwnProps>(
	Component: ComponentConstructor<Props>,
) {
	Handlebars.registerHelper(Component.componentName, function (options: HelperOptions) {
		const { hash, data } = options as unknown as IComponentHelperOptions<Props>;

		if (!data) {
			throw new Error("Component helper requires Handlebars data");
		}

		const dataAttribute = `data-component-hbs-id="${++uniqueId}"`;
		const component = new Component(hash);

		if (hash.ref) {
			data.root.__refs ??= {};
			data.root.__refs[hash.ref] = component.element();
		}

		data.root.__children ??= [];
		data.root.__children.push({
			component,
			embed(node: DocumentFragment) {
				const placeholder = node.querySelector(`[${dataAttribute}]`);

				if (!placeholder) {
					throw new Error(`Can't find data-id for component ${Component.componentName}`);
				}

				const element = component.element();
				placeholder.replaceWith(element);
			},
		});

		return `<div ${dataAttribute}></div>`;
	});
}
