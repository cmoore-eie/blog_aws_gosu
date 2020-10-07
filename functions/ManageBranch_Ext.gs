package acc.reference_data.functions

uses acc.user_function.ProcessDefinitionParam_Ext
uses acc.user_function.ProcessDefinition_Ext
uses acc.user_function.ProcessResultType_Ext
uses acc.user_function.ProcessResult_Ext
uses acc.user_function.functions.AbstractFunction_Ext
uses blog.userfunction.sdk.ApiClient
uses blog.userfunction.sdk.api.BranchApi
uses blog.userfunction.sdk.model.Branch

class ManageBranch_Ext extends AbstractFunction_Ext {

  construct(inFunction : ProcessDefinition_Ext, inParams : HashMap<Integer, Object>) {
    super(inFunction, inParams)
  }

  public function readBranch() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(BranchApi)
    var response = api.branchRead(key)
    Result.ValueObject = response
    return Result
  }

  public function writeBranch() : ProcessResult_Ext {
    var key = StringValue(1)
    var gender = ObjectValue(2) as Branch
    var api = new ApiClient().buildClient(BranchApi)
    var response = api.branchUpdate(key, gender)
    Result.ValueObject = response
    return Result
  }

  public function listBranch() : ProcessResult_Ext {
    var api = new ApiClient().buildClient(BranchApi)
    var response = api.branchList()
    Result.ValueList = response
    return Result
  }

  public function deleteBranch() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(BranchApi)
    api.branchDelete(key)
    return Result
  }

  public static function registerReadBranch() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "FetchBranch"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageBranch_Ext.Name
    definition.MethodName = "readBranch"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerListBranch() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "ListBranch"
    definition.Name = "Extract all gender definitions"
    definition.ClassPath = ManageBranch_Ext.Name
    definition.MethodName = "listBranch"
    definition.ResultType = ProcessResultType_Ext.LIST
    return definition
  }

  public static function registerDeleteBranch() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "DeleteBranch"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageBranch_Ext.Name
    definition.MethodName = "deleteBranch"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerWriteBranch() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "UpdateBranch"
    definition.Name = "Update or Create the Gener reference information"
    definition.ClassPath = ManageBranch_Ext.Name
    definition.MethodName = "writeBranch"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Branch",
      :Type = ProcessResultType_Ext.OBJECT,
      :Position = 2
    })

    return definition
  }

}