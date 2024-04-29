.PHONY: setup dev run

setup:
	docker run -it --rm -v $(PWD):/app osmium /bin/bash -c "npm install --legacy-peer-deps" ; \
  	docker run -it --rm -v $(PWD):/app osmium /bin/bash -c "npm run prebuild" ; \
  	docker run -it --rm -v $(PWD):/app osmium /bin/bash -c "npm run postbuild"

dev:
	docker run -it --rm -v $(PWD):/app -p 8000:3000 osmium /bin/bash -c "npm run dev"

run:
	docker run -it --rm -v $(PWD):/app osmium /bin/bash

# EXAMPLE: make npm-install PARAM=package-name
PARAM :=
npm-install:
	docker run -it --rm -v $(PWD):/app osmium /bin/bash -c "npm i $(PARAM)"
