FROM maven:3.9-eclipse-temurin-17 AS gelf-builder
ARG QUARKUS_GELF_VERSION=3.6.4
ARG LOGSTASH_GELF_VERSION=1.15.1
RUN useradd -m -u 1000 user
USER user
WORKDIR /home/user
RUN curl -o /home/user/quarkus-logging-gelf.jar https://repo1.maven.org/maven2/io/quarkus/quarkus-logging-gelf/${QUARKUS_GELF_VERSION}/quarkus-logging-gelf-${QUARKUS_GELF_VERSION}.jar
RUN curl -o /home/user/quarkus-logging-gelf-deployment.jar https://repo1.maven.org/maven2/io/quarkus/quarkus-logging-gelf-deployment/${QUARKUS_GELF_VERSION}/quarkus-logging-gelf-deployment-${QUARKUS_GELF_VERSION}.jar
RUN curl -o /home/user/logstash-gelf.jar https://repo1.maven.org/maven2/biz/paluch/logging/logstash-gelf/${LOGSTASH_GELF_VERSION}/logstash-gelf-${LOGSTASH_GELF_VERSION}.jar

FROM quay.io/keycloak/keycloak:24.0.4 AS builder
COPY --from=gelf-builder --chown=keycloak:keycloak /home/user/quarkus-logging-gelf.jar /opt/keycloak/providers/quarkus-logging-gelf.jar
COPY --from=gelf-builder --chown=keycloak:keycloak /home/user/quarkus-logging-gelf-deployment.jar /opt/keycloak/providers/quarkus-logging-gelf-deployment.jar
COPY --from=gelf-builder --chown=keycloak:keycloak /home/user/logstash-gelf.jar /opt/keycloak/providers/logstash-gelf.jar
USER keycloak
WORKDIR /opt/keycloak
RUN /opt/keycloak/bin/kc.sh build --features=authorization,impersonation --health-enabled=true


FROM quay.io/keycloak/keycloak:24.0.4
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/lib/quarkus/ /opt/keycloak/lib/quarkus/
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/providers/quarkus-logging-gelf.jar /opt/keycloak/providers/quarkus-logging-gelf.jar
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/providers/quarkus-logging-gelf.jar /opt/keycloak/lib/lib/main/quarkus-logging-gelf.jar
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/providers/quarkus-logging-gelf-deployment.jar /opt/keycloak/providers/quarkus-logging-gelf-deployment.jar
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/providers/quarkus-logging-gelf-deployment.jar /opt/keycloak/lib/lib/main/quarkus-logging-gelf-deployment.jar
COPY --from=builder --chown=keycloak:keycloak /opt/keycloak/providers/logstash-gelf.jar /opt/keycloak/providers/logstash-gelf.jar

RUN mkdir -p /opt/keycloak/domain/configuration
COPY --chown=keycloak:keycloak ./domain/configuration/domain.xml /opt/keycloak/domain/configuration/domain.xml
COPY --chown=keycloak:keycloak ./conf/quarkus.properties /opt/keycloak/conf/quarkus.properties
COPY --chown=keycloak:keycloak ./data/import /opt/keycloak/data/import

USER keycloak
WORKDIR /opt/keycloak
CMD [ "start-dev",  "--verbose", "--import-realm", "--health-enabled=true" ]
