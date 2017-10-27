SHELL:=/bin/bash

# Export locals variables - no local variables at the moment
# include .env
# export $(shell sed 's/=.*//' .env)

export DOCKER_COMPOSE_VERSION=2
export COMPOSE_PROJECT_NAME=kaideals

MD5 := $(shell which md5)
ifdef MD5
export TAG:=${shell date | md5 | cut -c27-}
else
export TAG:=${shell date | md5sum | cut -c27-}
endif

export CONTAINERS = $(wildcard containers/*)

define start_service
	cat $(1) >> docker-compose.override.yml &
endef

define create_docker_compose
	rm -f docker-compose.override.yml
	touch docker-compose.override.yml
   	echo "version: '$(DOCKER_COMPOSE_VERSION)'" >> docker-compose.override.yml
   	echo "services:" >>  docker-compose.override.yml
	$(foreach file, $(CONTAINERS),  $(call start_service, $(strip $(file))/docker-compose.dev.yml ) )
endef



docker-compose.override.yml:
	$(call create_docker_compose)


start: docker-compose.override.yml
	sudo docker-compose up -d
	${MAKE} refresh

stop:
	docker-compose down || true
	docker-compose down  --remove-orphans


clean:
	rm -f ~/.ecs/config
	rm docker-compose.override.yml


build:
	for cont in ${CONTAINERS} ; do \
		$(MAKE) build -C $$cont; \
	done


clobber:
	docker stop $$(docker ps -a -q) || true
	docker rm -f $$(docker ps -a -q) || true
	for cont in ${CONTAINERS} ; do \
		$(MAKE) clobber -C $$cont; \
	done


refresh:
	for cont in ${CONTAINERS} ; do \
		$(MAKE) refresh -C $$cont; \
	done

install:
	for cont in ${CONTAINERS} ; do \
		$(MAKE) install -C $$cont; \
	done

nuke:
	rm docker-compose.override.yml
	for cont in ${CONTAINERS} ; do \
		rm -rf $$cont/node_modules ; \
	done
	docker rmi $$(docker images --filter 'dangling=true' -q --no-trunc) || true
	docker rmi -f $$(docker images  --filter=reference='${COMPOSE_PROJECT_NAME}_*' -a -q) || true
	docker rmi -f $$(docker images -a -q) || true

postgres:
	${MAKE} db
	${MAKE} prod


db:
	createdb -h localhost -p 58008  -U postgres kai_database || true

prod:
	psql -h localhost -p 58008  -U postgres kai_database -f ./containers/database/kai_database_snapshot.sql

schema:
	psql -h localhost -p 58008 -U postgres kai_database -f ./containers/database/schema_kai_database.sql


savedb: ./containers/database/schema_kai_database.sql ./containers/database/kai_database_snapshot.sql

rmdb:
	rm ./containers/database/schema_kai_database.sql
	rm ./containers/database/kai_database_snapshot.sql

./containers/database/schema_kai_database.sql:
	docker exec postgres pg_dump -h localhost -p 5432 -c -O -x -s -U postgres kai_database  > ./containers/database/schema_kai_database.sql

./containers/database/kai_database_snapshot.sql:
	docker exec postgres pg_dump -h localhost -p 5432 -c -O -x -U postgres kai_database  > ./containers/database/kai_database_snapshot.sql
