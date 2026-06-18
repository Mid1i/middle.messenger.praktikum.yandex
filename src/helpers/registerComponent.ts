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
	Handlebars.registerHelper(Component.componentName, function (
			this: IBaseBlockOwnProps, 
			options: HelperOptions
		) {
			const { hash, data } = options as unknown as IComponentHelperOptions<Props>;
			
			const parentRoot = data?.root ?? this;
			const context = clearServiceProps(this);

			const slotRoot: IBaseBlockOwnProps = {
				...context,
				__children: [],
				__refs: {},
			};

			const slotData = Handlebars.createFrame(data ?? {});
			slotData.root = slotRoot;

			const slot = options.fn?.(slotRoot, { data: slotData }) ?? "";

			const component = new Component({
				...context,
				...hash,
				slot,
				__children: slotRoot.__children,
				__refs: slotRoot.__refs,
			} as Props);

			const dataAttribute = `data-component-hbs-id="${++uniqueId}"`;

			if (hash.ref) {
				parentRoot.__refs ??= {};
				parentRoot.__refs[hash.ref] = component.element();
			}

			parentRoot.__children ??= [];
			parentRoot.__children.push({
				component,
				embed(node: DocumentFragment) {
					const placeholder = node.querySelector(`[${dataAttribute}]`);

					if (!placeholder) {
						throw new Error(`Can't find data-id for component ${Component.componentName}`);
					}

					placeholder.replaceWith(component.element());
				},
			});

			return `<div ${dataAttribute}></div>`;
		}
	);
}

function clearServiceProps<Props extends object>(props: Props) {
	const result = { ...props };

	delete (result as IBaseBlockOwnProps).__children;
	delete (result as IBaseBlockOwnProps).__refs;

	return result;
}
