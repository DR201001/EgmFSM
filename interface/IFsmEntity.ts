import IFsm from "./IFsm";
import IFsmMessage from "./IFsmMessage";
import IFsmObject from "./IFsmObject";

export default interface IFsmEntity<T> {
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
     * 绑定状态机对象
     * @param object 
     */
    bindObject(object: T): void;

    /**
     * 获取状态机对象
     */
    getObject(): T;

    /**
     * 通知状态机
     * @param msg 
     */
    notifyToFsm(msg: IFsmMessage<any, any>): void;

    /**
     * 通知状态机对象
     * @param msg 
     */
    notifyToObject(msg: IFsmMessage<any, any>): void;

    /**
     * 更新
     * @param dt 
     * @param msg 
     */
    onUpdate(dt: number, msg?: IFsmMessage<any, any>): void;
}