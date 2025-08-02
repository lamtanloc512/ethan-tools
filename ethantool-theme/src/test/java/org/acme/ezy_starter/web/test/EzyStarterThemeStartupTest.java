package org.acme.ezy_starter.web.test;

import com.tvd12.ezyhttp.server.boot.EzyHttpApplicationBootstrap;
import com.tvd12.ezyhttp.server.core.annotation.ComponentsScan;
import com.tvd12.ezyhttp.server.core.annotation.PropertiesSources;

@PropertiesSources({
    "config.properties",
    "setup.properties"
})
@ComponentsScan({
    "org.youngmonkeys.ezyplatform",
    "org.acme.ezy_starter"
})
public class EzyStarterThemeStartupTest {

    public static void main(String[] args) throws Exception {
        EzyHttpApplicationBootstrap.start(EzyStarterThemeStartupTest.class);
    }
}
