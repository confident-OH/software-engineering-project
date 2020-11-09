class SceneManager {
	public static stage:egret.Stage;

//跳转到下一页面
	public static addScene(scene:eui.UIComponent){
		this.stage.addChild(scene);
	}

//跳转到上一页面
	public static removeScene(scene:eui.UIComponent){
		this.stage.removeChildren();
		this.stage.addChild(scene);
	}
}

/*
abstract class Scene extends eui.Component{
	public constructor() {
		super();
		this.addEventListener(egret.Event.COMPLETE,this.onSkinLoaded,this);
	}

	//皮肤加载完成的回调
	public abstract onSkinLoaded():void;
}
*/
