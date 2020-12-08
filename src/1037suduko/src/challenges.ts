class challenges extends eui.Component implements eui.UIComponent{
    public quit_to_PC:eui.Button;
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/challengeSkin.exml"
    }

    protected partAdded(partName: string, instance: any):void{
        super.partAdded(partName, instance);
    } 
    protected childrenCreated(): void{
        super.childrenCreated();

        //返回人机界面
        this.quit_to_PC.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            SceneManager.removeScene(new play_with_computers);
        }, this)
    }
    
}