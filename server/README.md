# Some commands

## Build an image from a Dockerfile

```console
docker build .
```

## Run a container (create + start)

```console
docker run CONTAINER_ID
```

- '-d' to run on detached mode;
- '-p' to specify ports.

## Docker Compose

```console
docker-compose up
docker-compose down
```

- If you are using a docker-compose-dev.yml, run the command

```console
docker-compose -f docker-compose-dev.yml up
```

- '-d' to run on detached mode;
- '--build' to rebuild the image.
