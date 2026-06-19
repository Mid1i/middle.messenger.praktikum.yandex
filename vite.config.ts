import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@/": "/src/",
			"@/assets": "/src/assets",
			"@/components": "/src/components",
			"@/constants": "/src/constants",
			"@/controllers": "/src/controllers",
			"@/helpers": "/src/helpers",
			"@/models": "/src/models",
			"@/modules": "/src/modules",
			"@/pages": "/src/pages",
			"@/services": "/src/services",
			"@/types": "/src/types",
		},
	},
});
