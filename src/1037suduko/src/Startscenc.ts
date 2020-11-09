class Startscence extends eui.Component implements eui.UIComponent{
    constructor(){
        super();
        this.skinName = "resource/eui_skins/myskin/StartscenseSkin.exml";
    }
    protected partAdded(partName: string, instance: any): void{
        super.partAdded(partName, instance);
    }
    protected childrenCreated(): void{
        super.childrenCreated();
    }
}