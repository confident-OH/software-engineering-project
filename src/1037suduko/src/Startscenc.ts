class Startscence extends eui.Component implements eui.UIComponent{
    public StartPlay:eui.Button;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/StartscenseSkin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    protected childrenCreated(): void{
        super.childrenCreated();
        this.StartPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Game_test());
        }, this)
    }
}