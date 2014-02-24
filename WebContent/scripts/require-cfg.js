require.config({
	baseUrl: "scripts",
	
	paths: {
		"text": "lib/requirejs-text/text",
		"lazy": "lib/require-lazy/lazy",
		"lazy-builder": "lib/require-lazy/lazy-builder",
		"promise-adaptor": "lib/require-lazy/promise-adaptor-jquery",
		"angular": "lib/angular/angular",
//		"i18n": "lib/require/i18n",
		"deferredInjector": "util/lib/angular-require/deferredInjector",
		"currentModule": "util/lib/angular-require/currentModule",
		"templateCache": "util/lib/angular-require/templateCache"
	},
	
	packages: ["app/main", "app/modules/index", "app/modules/categories", "app/modules/expenses"],
	
	config: {
		
	},
	
	shim: {
		"angular": {
			exports: "angular"
		},
		"lib/angular-ui-bootstrap/src/transition/transition": {
			deps: ["angular"]
		},
		"lib/angular-ui-bootstrap/src/collapse/collapse": {
			deps: ["angular", "lib/angular-ui-bootstrap/src/transition/transition"]
		},
		"lib/angular-ui-bootstrap/src/modal/modal": {
			deps: ["angular","util/modalTemplates"]
		},
		"lib/angular-route/angular-route": {
			deps: ["angular"]
		}
	}
});
