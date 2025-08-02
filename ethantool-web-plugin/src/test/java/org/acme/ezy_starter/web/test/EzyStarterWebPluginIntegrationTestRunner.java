package org.acme.ezy_starter.web.test;

import com.tvd12.ezyhttp.server.core.annotation.ComponentsScan;
import com.tvd12.ezyhttp.server.core.annotation.PropertiesSources;
import org.youngmonkeys.ezyplatform.test.IntegrationTestRunner;

@PropertiesSources({
    "config.properties",
})
@ComponentsScan({
    "org.youngmonkeys.ezyplatform",
    "org.acme.ezy_starter"
})
public class EzyStarterWebPluginIntegrationTestRunner {

    public static void main(String[] args) throws Exception {
        IntegrationTestRunner.run(
            EzyStarterWebPluginIntegrationTestRunner.class
        );
    }
}
