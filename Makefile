.PHONY: setup dev

setup:
	docker build . -t osmium ; \
	docker run -it -v $(PWD):/app osmium /bin/bash -c "npm install --legacy-peer-deps" ; \
  docker run -it -v $(PWD):/app osmium /bin/bash -c "npm run prebuild" ; \
  docker run -it -v $(PWD):/app osmium /bin/bash -c "npm run postbuild"

dev:
	docker run -it -v $(PWD):/app -p 3000:3000 osmium /bin/bash -c "npm run dev"

# EXAMPLE: make npm-install PARAM=package-name
PARAM :=
npm-install:
	docker run -it -v $(PWD):/app osmium /bin/bash -c "pnpm add $(PARAM)"
