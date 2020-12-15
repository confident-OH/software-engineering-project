/*
 * 模块名：SceneManager
 * 功能：提供页面跳转的API函数
 * 
 */
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

