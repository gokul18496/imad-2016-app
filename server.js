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

counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name', function(req, res){
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req, res) {
   res.send(createTemplate(articles[req.params.articleName])); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
