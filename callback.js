const https = require('https');
var joinit_api_token = 'sGxFZB93Y4AAkyJR2';

_EXTERNAL_URL = 'https://www.joinit.org/api/beta';

var member_endpoint = _EXTERNAL_URL + "organizations/me/memberships?token=" + joinit_api_token;

const getMembersFromNode = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
        let data = '';

        resp.on('data',(chunk)=>{
            data += chunk;
        });

        resp.on('end', () => {
            return callback(data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports.callApi = getMembersFromNode;
