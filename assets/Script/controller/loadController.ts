
import { _decorator, Component, Node,director,sys } from 'cc';
import { Routers } from '../contans/route';
const { ccclass, property } = _decorator;

const pinus = window.pinus;
 
@ccclass('LoadController')
export class LoadController extends Component {
   
    @property
    count = 0;

    @property
    inited = false;


    start () {
        let that = this;
        pinus.init({
            port:3014,
            host:'127.0.0.1'
        },function(){
            pinus.request(Routers.Gate.query,{uid:1},function(data){
                pinus.disconnect();
                pinus.init({
                    port:data.port,
                    host:data.host
                },function(){
                    pinus.request(Routers.Connector.entry,{},function(){
                        that.inited = true;
                    })
                })
            })
        })
    }

    update (deltaTime: number) {
        this.count += deltaTime;
        if(this.count>3 && this.inited){
            let token = sys.localStorage.getItem("TOKEN");
            if(!token){
                director.loadScene("login")
            }else{
                director.loadScene("main")
            }
            this.destroy()
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
