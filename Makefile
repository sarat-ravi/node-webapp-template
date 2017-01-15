.PHONY: default
default: run

.PHONY: build
build:
	npm install
	mkdir -p css
	node_modules/node-sass/bin/node-sass scss/styles.sass css/styles.css
	
.PHONY: run
run: build
	node app.js
