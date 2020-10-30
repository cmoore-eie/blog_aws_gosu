package acc.aws_reference_data.functions

uses acc.user_function.ProcessDefinitionParam_Ext
uses acc.user_function.ProcessDefinition_Ext
uses acc.user_function.ProcessResultType_Ext
uses acc.user_function.ProcessResult_Ext
uses acc.user_function.functions.AbstractFunction_Ext
uses blog.aws.referencedata.sdk.ApiClient
uses blog.aws.referencedata.sdk.api.DefaultApi
uses blog.aws.referencedata.sdk.model.Dealer

class ManageDealer_Ext extends AbstractFunction_Ext {

  construct(inFunction : ProcessDefinition_Ext, inParams : HashMap<Integer, Object>) {
    super(inFunction, inParams)
  }

  public function readDealer() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(DefaultApi)
/*    var response = api.dealerGet(key)
    Result.ValueObject = response*/
    return Result
  }

  public function writeDealer() : ProcessResult_Ext {
    var key = StringValue(1)
    var gender = ObjectValue(2) as Dealer
    var api = new ApiClient().buildClient(DefaultApi)
    var response = api.dealerPost(gender)
    Result.ValueObject = response
    return Result
  }

  public function listDealer() : ProcessResult_Ext {
    var api = new ApiClient().buildClient(DefaultApi)
    var response = api.dealerAllGet() as List
    Result.ValueList = response
    return Result
  }

  public function deleteDealer() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(DefaultApi)
    api.dealerDelete(key)
    return Result
  }

  public static function registerReadDealer() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "FetchDealer"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageDealer_Ext.Name
    definition.MethodName = "readDealer"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerListDealer() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "ListDealer"
    definition.Name = "Extract all gender definitions"
    definition.ClassPath = ManageDealer_Ext.Name
    definition.MethodName = "listDealer"
    definition.ResultType = ProcessResultType_Ext.LIST
    return definition
  }

  public static function registerDeleteDealer() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "DeleteDealer"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageDealer_Ext.Name
    definition.MethodName = "deleteDealer"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerWriteDealer() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "UpdateDealer"
    definition.Name = "Update or Create the Gener reference information"
    definition.ClassPath = ManageDealer_Ext.Name
    definition.MethodName = "writeDealer"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Dealer",
      :Type = ProcessResultType_Ext.OBJECT,
      :Position = 2
    })

    return definition
  }

}