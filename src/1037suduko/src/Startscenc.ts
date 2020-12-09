class Startscence extends eui.Component implements eui.UIComponent{
    public StartPlay:eui.Button;
    public StartPlay1:eui.Button;
    public StartPlay2:eui.Button;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/StartscenseSkin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    protected childrenCreated(): void{         
        super.childrenCreated();
        //进入人机练习模式
        this.StartPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new play_with_computers());
        }, this)
        //进入匹配模式
        this.StartPlay1.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new play_with_man());
        }, this)
        //进入比赛模式
        this.StartPlay2.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Game_test());
        }, this)
    }
    
}