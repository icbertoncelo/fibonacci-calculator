# Fibonacci calculator

This project was developed to practice the docker concepts, it uses docker to run multiples services.

<!-- Chart -->
<br />
<p align="center">
  <img src="https://raw.githubusercontent.com/icbertoncelo/fibonacci-calculator/master/client/images/fluxograma.png" alt="chart" width="600" height="300">

  <h3 align="center">Fluxograma</h3>
</p>

## Running application

- First, set all environments variables. To make it, rename all '.env.example' files to '.env'.
- In server folder, build all containers.

```console
docker-compose up --build
```

- In the next times, only up the containers.

```console
docker-compose up
```

- The project will run on port 3050
