//封装一个函数确定当前时间
export const getTime = ()=>{
  let hours = new Date().getHours()
  let message 
  if(hours < 8){
    message = '早上好'
  }else if(hours< 11){
    message = '上午好'
  }else if(hours < 14){
    message = '中午好'
  }else if(hours < 18){
    message = '下午好'
  }else{
    message = '晚上好'
  }
  return message
}