function yourMethod2(teste,res){
    
	res.send(201, "ok " + teste, {'Access-Control-Allow-Origin': 'http://foo.org'});
}