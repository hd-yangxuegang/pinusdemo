
import { _decorator, Component, Node, EditBox, SpriteComponent, Sprite, director } from 'cc';
import { Routers } from '../contans/route';
import { Storage } from '../contans/storage';


const { ccclass, property } = _decorator;




const pinus = window.pinus;

@ccclass('LoginController')
export class LoginController extends Component {
    @property(EditBox)
    ebUser: EditBox;

    @property(EditBox)
    ebPass: EditBox;

    start() {
        // [3]
    }

    login() {
        pinus.request(Routers.Auth.login, { username: this.ebUser.string, password: this.ebPass.string }, function (data) {
            if (!!data.token) {
                localStorage.setItem(Storage.Token, data.token);
                director.loadScene("main")
            } else {
                console.log(data)
            }

        })

    }

    register() {
        pinus.request(Routers.Auth.register, { username: this.ebUser.string, password: this.ebPass.string }, function (data) {
            console.log(data)
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

