NODEMON=node_modules/nodemon/bin/nodemon.js
SRC_NODEMON_ARGS=-e js,html,css,react,handlebars --watch html --watch . --watch css --watch js --watch views --watch views/layouts
CSS_NODEMON_ARGS=-e scss,sass --watch scss

.PHONY: default
default: run

.PHONY: css
css:
	mkdir -p css
	node_modules/node-sass/bin/node-sass scss/styles.sass css/styles.css

.PHONY: build
build: css
	npm install
	
.PHONY: run
run: build
	${NODEMON} ${SRC_NODEMON_ARGS} --exec "node --harmony app.js" & ${NODEMON} ${CSS_NODEMON_ARGS} --exec "make css" && fg
