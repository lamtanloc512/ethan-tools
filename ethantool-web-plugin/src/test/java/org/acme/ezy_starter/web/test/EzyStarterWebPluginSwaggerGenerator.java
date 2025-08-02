package org.acme.ezy_starter.web.test;

import org.youngmonkeys.devtools.swagger.SwaggerGenerator;

public class EzyStarterWebPluginSwaggerGenerator {

    public static void main(String[] args) throws Exception {
        SwaggerGenerator swaggerGenerator = new SwaggerGenerator(
            "org.acme.ezy_starter.web.controller"
        );
        swaggerGenerator.generateToDefaultFile();
    }
}
