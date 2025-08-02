package org.acme.ezy_starter.test;

import org.youngmonkeys.devtools.repository.RepositoryClassesGenerator;

public class EzyStarterRepositoryClassesGenerator {

    public static void main(String[] args) throws Exception {
        new RepositoryClassesGenerator(Object.class)
            .generate();
    }
}
