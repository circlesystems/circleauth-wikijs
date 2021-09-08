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

## Configuration

1. Create an application at [Unic Auth Console](https://console.unicauth.com/) (you can insert any URL at **Login Return URL** for now).
2. Within Wiki.js [Authentication module](https://docs.requarks.io/auth) add a new strategy and choose Unic Auth from the list.
3. Inside the 'STRATEGY CONFIGURATION' group fill out **App Key**, **Read Key** and **Write Key** fields available in the [Unic Auth Console](https://console.unicauth.com/) Application Info.
4. Enable the Self-registration option (unless you plan on authorizing users manually).
5. Select the group new users should be assigned to when they login for the first time.
6. Make sure the checkbox next to Unic Auth in the list of strategies is checked. The text should now say that the strategy is active.
7. Click Apply on the upper right of the page to save and apply the configuration.
8. In the 'Configuration Reference' group, copy the value from the field **Callback URL / Redirect URI**.
9. Now go back to edit your application at [Unic Auth Console](https://console.unicauth.com/) and paste the value copied from step 8 to **Login Return URL**. Save the application.