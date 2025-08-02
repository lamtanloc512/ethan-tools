package org.acme.ezy_starter.admin.test;

import org.youngmonkeys.devtools.swagger.SwaggerGenerator;

public class EzyStarterAdminPluginSwaggerGenerator {

    public static void main(String[] args) throws Exception {
        SwaggerGenerator swaggerGenerator = new SwaggerGenerator(
            "org.acme.ezy_starter.admin.controller"
        );
        swaggerGenerator.generateToDefaultFile();
    }
}
