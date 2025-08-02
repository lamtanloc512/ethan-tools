package org.acme.ezy_starter.web.controller.view;

import com.tvd12.ezyhttp.server.core.annotation.Controller;
import com.tvd12.ezyhttp.server.core.annotation.DoGet;
import com.tvd12.ezyhttp.server.core.view.View;

import static org.youngmonkeys.ezyplatform.constant.CommonConstants.VIEW_VARIABLE_PAGE_TITLE;

@Controller
public class HomeController {

    @DoGet("/")
    public View home() {
        return View.builder()
                .template("home")
                .addVariable(VIEW_VARIABLE_PAGE_TITLE, "home")
                .build();
    }

    @DoGet("/page")
    public View page() {
        return View.builder()
                .template("page")
                .addVariable(VIEW_VARIABLE_PAGE_TITLE, "page")
                .build();
    }
}
