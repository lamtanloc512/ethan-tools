set -e
mvn -pl . clean install
mvn -pl ethantool-sdk clean install
mvn -pl ethantool-admin-plugin clean install -Pexport,\!test
mvn -pl ethantool-web-plugin clean install -Pexport,\!test
mvn -pl ethantool-theme clean install -Pexport,\!test
ezy.sh package
ezy.sh export
