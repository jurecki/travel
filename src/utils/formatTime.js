function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad('0' + str, max) : str;
}


export const formatTime = (time) => {

  if (typeof(time) != 'number' || time<=0) {
    return null;
  } else {
    let output = pad(time%60, 2);

    if (time>60) {
      output = pad(Math.floor(time/60)%60,2) +':' + output;
    } else {
      output = '00:00:' + output;  
    }
    if (time > 3600) {
      output = pad(Math.floor(time/3600),2) + ':' + output;
    } else {
      output = '00:' + output; 
    }
    return output;
  }
      
};
