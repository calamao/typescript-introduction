import {HelloWorld} from './exercise.6';
// import {HelloWorld} from "../../solutions/6/exercise.6";

describe('Hello World', () => {

    let targetTest = <any>HelloWorld;

    it('says hello world with no name', () => {
        expect(targetTest.hello()).toEqual('Hello, World!');
    });

    it('says hello to bob', () => {
        expect(targetTest.hello('Bob')).toEqual('Hello, Bob!');
    });

    it('says hello to sally', () => {
        expect(targetTest.hello('Sally')).toEqual('Hello, Sally!');
    });
});