help:
	@echo "Existing goals are: "
	@echo "clean       -> remove the dependencies"
	@echo "help        -> display this message"
	@echo "getdeps     -> npm install"
	@echo "image       -> build the docker image to run the project"

clean:
	rm -rf node_modules

getdeps:
	npm install

image:
	docker build -t denouche/jarvis .

