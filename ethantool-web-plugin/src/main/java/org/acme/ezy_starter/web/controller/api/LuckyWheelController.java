package org.acme.ezy_starter.web.controller.api;

import com.tvd12.ezyfox.util.EzyMapBuilder;
import com.tvd12.ezyhttp.server.core.annotation.Controller;
import com.tvd12.ezyhttp.server.core.annotation.DoGet;

@Controller("/api/v1")
public class LuckyWheelController {

    @DoGet("/ezy-starter")
    public Object info() {
        return EzyMapBuilder.mapBuilder()
            .put("name", "ezy-starter")
            .build();
    }
}
