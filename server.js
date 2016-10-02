var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one' : {
    title:'Article One',
    heading: 'Article 1',
    content: `            <p>
                Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!
            </p>
            <p>
                Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!
            </p>
            <p>
                Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!Hi! Some New Text. Cheap Thrills !!!
            </p>`
    }, 

   'article-two' : {
    title:'Article Two',
    heading: 'Article 2',
    content: 'This is article 2'
    }, 

    'article-three' : {
    title:'Article Three',
    heading: 'Article 3',
    content: 'This is article threeee'
   }  
    
};

function createTemplate(data){
    
        var title = data.title;
        var heading = data.heading;
        var content = data.content;
        
        var htmlTemplate = 
            `
            <html>
            <head>
                <title>
                  ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr />
                    <h3>
                    ${heading}
                    </h3>
                    ${content}
                </div>    
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
   res.send(createTemplate(articles[req.param.articleName])); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
