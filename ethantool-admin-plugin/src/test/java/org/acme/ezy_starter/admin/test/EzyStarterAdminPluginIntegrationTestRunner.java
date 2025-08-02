package org.acme.ezy_starter.admin.test;

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
public class EzyStarterAdminPluginIntegrationTestRunner {

    public static void main(String[] args) throws Exception {
        IntegrationTestRunner.run(
            EzyStarterAdminPluginIntegrationTestRunner.class
        );
    }
}
