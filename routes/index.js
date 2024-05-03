var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/.well-known/apple-app-site-association', function (req, res, next) {
    res.send({
        applinks: {}, webcredentials: {
            apps: ["N934426HMQ.com.khanbank.wallet"]
        }, appclips: {}
    })
});

/* GET home page. */
router.get('/.well-known/assetlinks.json', function (req, res, next) {
    res.send([{
        relation: ["delegate_permission/common.handle_all_urls", "delegate_permission/common.get_login_creds"],
        target: {
            namespace: "android_app",
            package_name: "com.khanbank.wallet",
            sha256_cert_fingerprints: ["FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"]
        }
    }])
});
module.exports = router;
