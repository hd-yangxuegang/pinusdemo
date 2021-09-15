
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

const pinus = window.pinus;
 
@ccclass('GameController')
export class GameController extends Component {
    

    onLoad(){}

    start () {
        pinus.request("connector.entryHandler.entry",{username:'admin'},function(data){
            console.log(data)
        })
    }

    update (deltaTime: number) {
        
    }
}
