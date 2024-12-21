FROM quay.io/keycloak/keycloak:26.0.7
USER keycloak
WORKDIR /opt/keycloak
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build --features=authorization,impersonation --health-enabled=true --metrics-enabled=true
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "--verbose", "start", "--import-realm", "--optimized"]