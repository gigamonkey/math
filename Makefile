SHELL := bash -O globstar

WEB := ~/web/www.gigamonkeys.com/math

publish:
	./publish.sh *.html *.css proofs
