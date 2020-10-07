package acc.reference_data.enhancements

uses acc.user_function.ObjectMap_Ext
uses acc.user_function.Process_Ext
uses blog.userfunction.sdk.model.Gender

enhancement GenderEnhancement_Ext : Gender {

  public static function fetchGender(inKey : String) : Gender {
    var cmd = 'fetchGender("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Gender
  }

  public static function listGender() : List<Gender> {
    var cmd = 'listGender()'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as List<Gender>
  }

  public static function deleteGender(inKey : String){
    var cmd = 'deleteGender("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
  }

  public static function updateGender(inGender : Gender) : Gender {
    var cmd = 'fetchGender("${inGender.Code}", ${inGender})'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Gender
  }

}
