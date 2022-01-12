# AIM


Platform give opportunity to analyze realtime data feed from the most popular crypto exchanges.

`AIM` platform is a system of microservices.

## feed

Microservice `feed` is the main part. It has range of connectors that subscripbe crypto exchanges data and convert it into common protocol, then it publishes to event bus

## client

Web client, it shows current platform's state. Allows admin to manage `feed` microservice.