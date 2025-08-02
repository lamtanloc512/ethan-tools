package org.acme.ezy_starter.test;

import org.youngmonkeys.devtools.pagination.PaginationClassesGenerator;

public class EzyStarterPaginationClassesGenerator {

    public static void main(String[] args) throws Exception {
        new PaginationClassesGenerator(Object.class)
            .generate();
    }
}
