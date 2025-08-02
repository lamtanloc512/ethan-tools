mvn -pl . clean install & ^
mvn -pl ezy-starter-sdk clean install & ^
mvn -pl ezy-starter-admin-plugin clean install -Pexport,\!test & ^
mvn -pl ezy-starter-web-plugin clean install -Pexport,\!test & ^
mvn -pl ezy-starter-theme clean install -Pexport,\!test & ^
ezy.bat package & ^
ezy.bat export
