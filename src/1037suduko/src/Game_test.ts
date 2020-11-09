class Game_test extends eui.Component implements eui.UIComponent{
    public Button_quit:eui.Button;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/game_test1Skin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    protected childrenCreated(): void{
        super.childrenCreated();
        this.Button_quit.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new Startscence());
        }, this)
    }
}