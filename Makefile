install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish	
lint:
	npm run eslint —- dist/bin/brain-games.js 
