import type { EventListType } from "@/types";

import Handlebars from "handlebars";

export interface IBaseBlockOwnProps {
	slot?: string;
	__children?: Array<{
		component: BaseBlock<IBaseBlockOwnProps>;
		embed(node: DocumentFragment): void;
	}>;
	__refs?: Record<string, Element>;
}

export default abstract class BaseBlock<Props extends IBaseBlockOwnProps> {
	public static componentName: string;

	protected abstract template: string;

	protected props: Props = {} as Props;
	protected events: EventListType = {};
	protected refs: Record<string, Element> = {};
	protected children: BaseBlock<IBaseBlockOwnProps>[] = [];

	private domElement: Element | null = null;

	constructor(props: Props) {
		this.props = props;
	}

	public element(): Element {
		if (!this.domElement) {
			this.render();
		}

		return this.domElement as Element;
	}

	public setProps(props: Partial<Props>) {
		this.props = {
			...this.props,
			...props,
			__children: [],
			__refs: {},
		};

		this.render();
	}

	protected componentDidMount() {}

	protected componentWillUnmount() {}

	protected render() {
		this.unmountComponent();

		const fragment = this.compile();

		if (this.domElement && fragment) {
			this.domElement.replaceWith(fragment);
		}

		this.domElement = fragment;
		this.mountComponent();
	}

	private attachListeners() {
		for (const eventName in this.events) {
			const eventCallback = this.events[eventName as keyof EventListType];

			if (typeof eventCallback === "function" && this.domElement) {
				this.domElement.addEventListener(eventName, eventCallback);
			}
		}
	}

	private removeListeners() {
		for (const eventName in this.events) {
			const eventCallback = this.events[eventName as keyof EventListType];

			if (typeof eventCallback === "function" && this.domElement) {
				this.domElement.removeEventListener(eventName, eventCallback);
			}
		}
	}

	private mountComponent() {
		this.attachListeners();
		this.componentDidMount();
	}

	private unmountComponent() {
		if (this.domElement) {
			this.children.reverse().forEach((child) => child.unmountComponent());
			this.componentWillUnmount();
			this.removeListeners();
		}
	}

	private compile(): Element | null {
		const html = Handlebars.compile(this.template)(this.props);
		const templateElement = document.createElement("template");

		templateElement.innerHTML = html;

		const fragment = templateElement.content;

		if (this.props.__children) {
			this.children = this.props.__children.map((child) => child.component);

			this.props.__children.forEach((child) => child.embed(fragment));
		}

		const defaultRefs = this.props?.__refs ?? {};
		const fragmentRefs = fragment.querySelectorAll("[ref]");

		this.refs = Array.from(fragmentRefs).reduce<Record<string, Element>>((list, element) => {
			const key = element.getAttribute("ref");

			if (key) {
				list[key] = element;
				element.removeAttribute("ref");
			}
			return list;
		}, defaultRefs);

		return fragment.firstChild as Element | null;
	}
}
