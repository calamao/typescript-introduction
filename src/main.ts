import { Greeter } from './greeter';
import { changeTitleAction } from './jquery/jquery.example';

const g = new Greeter('Bernat!');
g.greet();

changeTitleAction('I changed the text!');
