help:
	@echo "Existing goals are: "
	@echo "clean       -> remove the dependencies"
	@echo "help        -> display this message"
	@echo "image       -> build the docker image to run the project"
	@echo "install     -> npm install"

clean:
	rm -rf node_modules

install:
	npm install

image:
	docker build -t denouche/jarvis .


