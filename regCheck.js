module.exports = function(param1, location) {
    if (param1.endsWith(location)) {
      return true
    } else {
      return false 
    }
   }
//regCheck('CY 189-012', 'ND')
   