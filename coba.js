function* nama(){
    yield 'gab';
    yield 'bag'
}

for(const name of nama()){
    console.log(name);
    
}