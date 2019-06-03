context = describe;

describe("the JavaScript language", function () {

  describe("has different types and operators that", function () {
    it("considers numbers to be equal to their string representation", function () {
      expect(1 == "1").toBeTruthy();// Truthy, los numeros se consideran iguales a sus representaciones en string
      expect(1 != "1").toBeFalsy();// Falsy, por lo mismo
    });

    it("knows that numbers and strings are not exactly the same", function () {
      expect(1 === "1").toBeFalsy();// Falsy, ya que es una comparacion estricta y no solo compara el valor sino su tipo
      expect(1 !== "1").toBeTruthy();// Truthy, por lo mismo
    });

    it("joins parts as string when using the plus operator", function () {
      expect(1 + "a").toEqual("1a"); //convierte el 1 en string y lo concatena "1a"
    });

    it("operates integers before joining the string", function () {
      expect(1 + 1 + "2").toEqual('22'); //primero realiza la suma 1+1=2 y luego los concatena con el "2" y sale "22"
    });

    it("knows the type of the variable", function () {
      var x = 1;
      expect(typeof (x)).toEqual('number'); //reconoce el mismo el tipo, al ser un numero lo pone de tipo number
    });

    it("considers an empty string to be falsy", function () {
      expect("" == false).toBeTruthy();// Truthy ya que solo compara en valor de boolean 
      expect("" === false).toBeFalsy();// Falsy ya que no son el mismo tipo uno es string y el otro es boolean
    });

    it("considers zero to be falsy", function () {
      expect(0 == false).toBeTruthy();// Truthy, por lo mismo de antes 
      expect(0 === false).toBeFalsy();// Falsy
    });

    it("considers nulls to be falsy", function () {
      var x = null;
      var result;
      if (x) {
        result = true;
      }
      else {
        result = false;  //entra aqui
      }

      expect(result == false).toBeTruthy();// Truthy ya que result vale false
    });

    it("knows the type of a function", function () {
      function x() { }

      expect(typeof (x)).toBe('function');    //es de tipo function
      expect(typeof (xxx)).toBe('undefined'); //no esta definido
    });

  });
});
