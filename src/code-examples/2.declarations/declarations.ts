
export class Declarations {
    // o   Let, const, var, public, private, protected, static
    // o   For.. of..

    private static myCacheVariable = "";

    public readonly imVisibleOutside = false;

    constAndStatic() {
        const maximumNumber: number = 10;

        // ERROR (const)
        // maximumNumber = 10;

        // ERROR (static)
        // this.myCacheVariable = "my info to save";
        Declarations.myCacheVariable = "my info to save";

        // ERROR (readonly)
        // this.imVisibleOutside = true;

     }

     // let, private
     private variableLet(input: boolean) {
        let a = 100;

        if (input) {
            // Still okay to reference 'a'
            let b = a + 1;
            return b;
        }

        // Error: 'b' doesn't exist here
        // return b;
    }

}