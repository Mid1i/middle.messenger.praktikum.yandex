import { defineConfig } from "vite";


export default defineConfig({
	resolve: {
		alias: {
			"@/": "/src/",
			"@/assets": "/src/assets",
			"@/components": "/src/components",
			"@/constants": "/src/constants",
			"@/helpers": "/src/helpers",
			"@/modules": "/src/modules",
			"@/pages": "/src/pages",
			"@/types": "/src/types",
		}
	}
});
