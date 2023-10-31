docker build --no-cache -f SQL\Dockerfile.PostgreSql -t muxagot3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t muxagot3/app ../..
