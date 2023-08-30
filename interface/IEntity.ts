import IFsm from "./IFsm";
import IFsmMessage from "./IFsmMessage";

export default interface IEntity<T> {
    /**
     * 设置状态机
     * @param fsm 
     */
    setFsm(fsm: IFsm<T>): void;

    /**
     * 获取状态机
     */
    getFsm(): IFsm<T>;

    /**
     * 绑定游戏对象
     * @param object 
     */
    bindGameObject(object: T): void;

    /**
     * 获取游戏实体
     */
    getGameObject(): T;

    /**
     * 通知状态机
     * @param msg 
     */
    notifyToFsm(msg: IFsmMessage<any, any>): void;

    /**
     * 通知游戏实体
     * @param msg 
     */
    notifyToObject(msg: IFsmMessage<any, any>): void;

    /**
     * 通知 entity
     * @param msg 
     */
    notifyToEntity(msg: IFsmMessage<any, any>): void;

    /**
     * 更新
     * @param dt 
     * @param msg 
     */
    onUpdate(dt: number, msg?: IFsmMessage<any, any>): void;
}