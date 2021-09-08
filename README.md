# unicauth-wikijs
Unic Auth authentication provider for Wiki.js

## Installation

Run the following command entering the correct `$WIKIJS_PATH` and `$VERSION` (choose a version number from [tags](https://github.com/habloapp/unicauth-wikijs/tags))

```shell
cd $WIKIJS_PATH

wget https://github.com/habloapp/unicauth-wikijs/archive/refs/tags/$VERSION.tar.gz
tar xzf $VERSION.tar.gz -C .
cp -r unicauth-wikijs-$VERSION/server .
cp -r unicauth-wikijs-$VERSION/assets .
rm -r unicauth-wikijs-$VERSION
rm $VERSION.tar.gz

cd ./server/modules/authentication/unicauth
npm install
```
