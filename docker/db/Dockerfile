# Base the image off of the NodeJS image
# FROM node
FROM postgres:12-alpine

# Start the container with a bash terminal ready
# ENTRYPOINT ["/bin/bash"]

# copy initialization script over to initialize database
COPY ./init.sql /docker-entrypoint-initdb.d/init.sql
