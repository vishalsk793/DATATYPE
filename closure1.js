function multiply(num1)
  {
   function inner_multiply(num2)
      {
          console.log(num1*num2);
      }
    return inner_multiply;
  }
var  m_obj_1 = multiply(4);
m_obj_1(2);
m_obj_1(3);