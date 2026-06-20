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

import registerComponent from "@/helpers/registerComponent";
import formatDate from "@/helpers/formatDate";
import isEqual from "@/helpers/isEqual";
import notEqual from "@/helpers/notEqual";
import setDefault from "@/helpers/setDefault";

import AppController from "@/controllers/AppController";

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

const app = new AppController();
app.render();
