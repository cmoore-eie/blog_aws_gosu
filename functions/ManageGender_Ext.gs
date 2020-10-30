package acc.aws_reference_data.functions

uses acc.user_function.ProcessDefinitionParam_Ext
uses acc.user_function.ProcessDefinition_Ext
uses acc.user_function.ProcessResultType_Ext
uses acc.user_function.ProcessResult_Ext
uses acc.user_function.functions.AbstractFunction_Ext
uses blog.aws.referencedata.sdk.ApiClient
uses blog.aws.referencedata.sdk.api.DefaultApi
uses blog.aws.referencedata.sdk.model.Gender

class ManageGender_Ext  extends AbstractFunction_Ext {

  construct(inFunction : ProcessDefinition_Ext, inParams : HashMap<Integer, Object>) {
    super(inFunction, inParams)
  }

  public function readGender() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(DefaultApi)
    var response = api.genderGet(key)
    Result.ValueObject = response
    return Result
  }

  public function writeGender() : ProcessResult_Ext {
    var key = StringValue(1)
    var gender = ObjectValue(2) as Gender
    var api = new ApiClient().buildClient(DefaultApi)
    var response = api.genderPut(gender)
    Result.ValueObject = response
    return Result
  }

  public function listGender() : ProcessResult_Ext {
    var api = new ApiClient().buildClient(DefaultApi)
    var response = api.genderAllGet() as List
    Result.ValueList = response
    return Result
  }

  public function deleteGender() : ProcessResult_Ext {
    var key = StringValue(1)
    var api = new ApiClient().buildClient(DefaultApi)
    api.genderDelete(key)
    return Result
  }

  public static function registerReadGender() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "FetchGender"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageGender_Ext.Name
    definition.MethodName = "readGender"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerListGender() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "ListGender"
    definition.Name = "Extract all gender definitions"
    definition.ClassPath = ManageGender_Ext.Name
    definition.MethodName = "listGender"
    definition.ResultType = ProcessResultType_Ext.LIST
    return definition
  }

  public static function registerDeleteGender() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "DeleteGender"
    definition.Name = "Extract the Gener reference information"
    definition.ClassPath = ManageGender_Ext.Name
    definition.MethodName = "deleteGender"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    return definition
  }

  public static function registerWriteGender() : ProcessDefinition_Ext{
    var definition = new ProcessDefinition_Ext()
    definition.Code = "UpdateGender"
    definition.Name = "Update or Create the Gener reference information"
    definition.ClassPath = ManageGender_Ext.Name
    definition.MethodName = "writeGender"
    definition.ResultType = ProcessResultType_Ext.OBJECT

    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Key",
      :Type = ProcessResultType_Ext.STRING,
      :Position = 1
    })
    definition.Parameters.add(new ProcessDefinitionParam_Ext(){
      :Name = "Gender",
      :Type = ProcessResultType_Ext.OBJECT,
      :Position = 2
    })

    return definition
  }

}