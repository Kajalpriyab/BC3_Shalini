pragma solidity >=0.4.22 <0.8.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "remix_accounts.sol";
import "./SimpSave.sol";

// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
contract testSuite {

SimpSave save;
    /// 'beforeAll' runs before all other tests
    /// More special functions are: 'beforeEach', 'beforeAll', 'afterEach' & 'afterAll'
    function beforeAll() public {
       save = new SimpSave();
    }
    //unit test 1 test the default values of number
    function checkDefaultValueNumber() public returns (bool){
        return Assert.equal(save.GetNumberData(), 5000, "The default value should be 5000");
    }
    // unit test 2 test of de default value 1000 is
    function defaultValueShouldNotBeNumbers() public returns (bool){
        return Assert.notEqual(save.GetNumberData(), 1000, "The default value only can be 5000");
    }
    //unit test 3 checks if the data is set to the new data
    function checkNewNumbers() public returns (bool){
      save.SaveNumberData(110);
      return Assert.equal(save.GetNumberData(), 110, "value should be 110");
  }
    //unit test 4 test the default value of textdata
    function checkDefaultValueTextData() public returns (bool){
         return Assert.equal(save.GetTextData(), "testdata", "The default value should be 5000");
    }
  
    //unit test 5check if the textdata is set to the new textdata
    function checkNewTextData() public returns (bool){
        save.saveTextData("text");
        return Assert.equal(save.GetTextData(), "text", "The default testdata should be testdata");
    }
}