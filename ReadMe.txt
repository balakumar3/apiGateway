docker build -t api-gateway .
docker run -it -p 5000:5000 api-gateway

docker run -it -p 5000:5000 --add-host=host.docker.internal:host-gateway api-gateway
docker run -it -p 5000:5000 --add-host=host.docker.internal:host-gateway api-gateway
docker network create my-network


docker run --network my-network --name app -p 3000:3000 user-service

docker run --network my-network --name api-gateway -p 5000:5000 api-gateway
docker run --network my-network --name user-service -p 3000:3000 user-service

docker build -t user-service .
docker build -t api-gateway .

docker rm -f user-service
docker rm -f api-gateway

docker network create my-network


AUTH_SERVICE_URL=http://localhost:3000
RES_SERVICE_URL=http://localhost:8082
ORDER_SERVICE_URL=http://localhost:8081
PORT=5000