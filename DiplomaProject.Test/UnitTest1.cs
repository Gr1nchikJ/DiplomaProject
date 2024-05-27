using DiplomaProject.Core.Model;
using DiplomaProject.Core.SmartContract;

namespace DiplomaProject.Test
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var test = new Class1();

            var certificate = new Certificate() { Id = 1, Name = "Test" };

            var result = test.Do(certificate);
        }
    }
}