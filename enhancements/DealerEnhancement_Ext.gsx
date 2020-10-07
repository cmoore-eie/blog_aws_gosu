package acc.reference_data.enhancements

uses acc.user_function.ObjectMap_Ext
uses acc.user_function.Process_Ext
uses blog.userfunction.sdk.model.Dealer

enhancement DealerEnhancement_Ext : Dealer {

  public static function fetchDealer(inKey : String) : Dealer {
    var cmd = 'fetchDealer("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Dealer
  }

  public static function listDealer() : List<Dealer> {
    var cmd = 'listDealer()'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as List<Dealer>
  }

  public static function deleteDealer(inKey : String){
    var cmd = 'deleteDealer("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
  }

  public static function updateDealer(inDealer : Dealer) : Dealer {
    var cmd = 'fetchDealer("${inDealer.Code}", ${inDealer})'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Dealer
  }

}
