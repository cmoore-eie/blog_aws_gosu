package acc.reference_data.enhancements

uses acc.user_function.ObjectMap_Ext
uses acc.user_function.Process_Ext
uses blog.userfunction.sdk.model.Branch

enhancement BranchEnhancement_Ext : Branch {

  public static function fetchBranch(inKey : String) : Branch {
    var cmd = 'fetchBranch("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Branch
  }

  public static function listBranch() : List<Branch> {
    var cmd = 'listBranch()'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as List<Branch>
  }

  public static function deleteBranch(inKey : String){
    var cmd = 'deleteBranch("${inKey}")'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
  }

  public static function updateBranch(inBranch : Branch) : Branch {
    var cmd = 'fetchBranch("${inBranch.Code}", ${inBranch})'
    var objectMap = new ObjectMap_Ext()
    var process = new Process_Ext(objectMap)
    process.evaluate(cmd)
    return process.Result.ValueObject as Branch
  }

}
