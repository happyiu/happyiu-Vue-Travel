let defaultCitty = '北京'
  try{
    if(localStorage.city){
      defaultCitty = localStorage.city
    }
  } 
  catch(e){}

  export default {
    city: defaultCitty
  }