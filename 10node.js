var http=require('http');
var fs=require('fs');

const server=http.createServer(function (req,res){
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream('exp10.html').pipe(res);
    }
    else if(req.url==='/register' && req.method==='POST'){
        var recData='';
        req.on('data',function(data){
               recData+= data;
        })
        req.on('end',function(){
            var inputdata=new URLSearchParams(recData);
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("<h1 style='color:blue'>"+"USER SUBMITTED DETAILS"+"</h1>")
            res.write("<table style='font-color:blue, margin-left:auto, margin-right:auto' border=1 cellspacing=0><tr><th>NAME</th><th>"+inputdata.get('username')+"</th></tr>")
            res.write("<tr><th>Password</th><th>"+inputdata.get('password')+"</th></tr>")
            res.write("<tr><th>Age</th><th>"+inputdata.get('age')+"</th></tr>")
            res.write("<tr><th>Mobile number</th><th>"+inputdata.get('mobileno')+"</th></tr>")
            res.write("<tr><th>Email</th><th>"+inputdata.get('email')+"</th></tr>")
            res.write("<tr><th>Gender</th><th>"+inputdata.get('gender')+"</th></tr>")
            res.write("<tr><th>State</th><th>"+inputdata.get('state')+"</th></tr>")
            res.write("<tr><th>Skills</th><th>"+inputdata.get('skill[]')+"</th></tr>")
            res.write("</table>")     
            res.end();

        })
    }
})
server.listen(8000,function(){
    console.log('server started at 8000');
})