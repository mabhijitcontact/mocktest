const express = require("express");
const bodyParser = require('body-parser');
const webApp = express();

// Webapp settings
webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Home route
webApp.get('/', (req, res) => {
    res.send(`Welcone to Server!`);
});
/*
@Request body :-

{"templateObj":{
                "template_id": "\"templateID\"", //templateID should be replaced with actual value.
                "active": 1,
                "name": "v1.2",
                "html_content": "<h1>{{{heading}}}<\/h1>\r\n<h5> This is from local server template just for test<\/h5>\r\n<a href=\"default.asp\">\r\n<img src={{{image}}} alt=\"HTML tutorial\" style=\"width:200px;height:200px;border:0\">\r\n<\/a>\r\n<p>{{{description}}}<\/p>\r\n",
                "plain_content": "{{{heading}}} This is from local server template just for test {{{description}}}",
                "subject": "{{{subject}}}"
            }
}

@Response body is:-
{
    "template_id": "\"templateID\"", 
    "active": 1,
    "name": "v1.2",
    "html_content": "<h1>{{{heading}}}<\/h1>\r\n<h5> This is from local server template just for test<\/h5>\r\n<a href=\"default.asp\">\r\n<img src={{{image}}} alt=\"HTML tutorial\" style=\"width:200px;height:200px;border:0\">\r\n<\/a>\r\n<p>{{{description}}}<\/p>\r\n",
    "plain_content": "{{{heading}}} This is from local server template just for test {{{description}}}",
    "subject": "{{{subject}}}"
}
*/

webApp.post('/addDynamicTemplateHTML', (req, res) => {
    let args = req.body.templateObj;
    args["template_id"] = JSON.parse(args.template_id);
    args["html_content"] = unescape(args.html_content);
    res.status(200).json(args);
});

const PORT = 8888;
// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});