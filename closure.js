function parent()
{
    var message = "Hello World";
    function child()
      {
        console.log(message);
      }
     child();
}
parent();
