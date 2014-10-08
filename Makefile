test-cov:
	./node_modules/istanbul/lib/cli.js cover -- ./node_modules/mocha/bin/_mocha -R spec

test:
	npm test

ci:
	make test-cov
	./node_modules/istanbul/lib/cli.js check-coverage --statements=100 --branches=100 functions=100 --lines=100
	browserify test/* -o browser.js
	karma start karma.conf.js --browsers=PhantomJS

.PHONY: test test-cov ci
