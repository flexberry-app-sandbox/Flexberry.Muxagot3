docker build --no-cache -f SQL\Dockerfile.PostgreSql -t muxagot3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t muxagot3-java/app ../../..
