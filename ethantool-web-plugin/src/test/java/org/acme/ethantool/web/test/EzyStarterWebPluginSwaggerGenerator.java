package org.acme.ethantool.web.test;

import org.youngmonkeys.devtools.swagger.SwaggerGenerator;

public class EzyStarterWebPluginSwaggerGenerator {

    public static void main(String[] args) throws Exception {
        SwaggerGenerator swaggerGenerator = new SwaggerGenerator(
            "org.acme.ethantool.web.controller"
        );
        swaggerGenerator.generateToDefaultFile();
    }
}
