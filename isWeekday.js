module.exports = function(day) {
  
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
    if (days.includes(day)) {
      return true
    } else {
      return false
    }
  }
  
//isWeekday('Saturday')