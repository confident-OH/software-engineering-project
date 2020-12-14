class Game_test extends eui.Component implements eui.UIComponent{
    public quit_to_main:eui.Button;
    public sudokoTable:eui.Group;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    //处理函数
    private onChang(a,b){
        egret.log(a,b);
    }
    protected childrenCreated(): void{
        super.childrenCreated();
        this.quit_to_main.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Startscence());
        }, this)
        //添加监听，监听用户的输入
        this.sudokoTable.getElementAt(0).addEventListener(egret.Event.CHANGE,this.onChang.bind(this,1,1,false),this);
        this.sudokoTable.getElementAt(1).addEventListener(egret.Event.CHANGE,this.onChang.bind(this,1,2,false),this);
        this.sudokoTable.getElementAt(9).addEventListener(egret.Event.CHANGE,this.onChang.bind(this,2,1,false),this);
    }
}