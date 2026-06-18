export default {
	extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
	ignoreFiles: ["dist/**", "node_modules/**"],
	rules: {
		"custom-property-empty-line-before": null,
		"custom-property-pattern": null,
		"declaration-empty-line-before": null,
		"selector-class-pattern": null,
		"scss/dollar-variable-pattern": null,
	},
};
