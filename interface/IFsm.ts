import IFsmEntity from "./IFsmEntity";
import IFsmMessage from "./IFsmMessage";
import IFsmState from "./IFsmState";

export default interface IFsm<T> {
    /**
     * 更新
     * @param dt 
     * @param msg 
     */
    onUpdate(dt: number, msg?: IFsmMessage<any, any>): void;

    /**
     * 切换状态
     * @param stateClass 状态类
     * @param msg 
     */
    changeState(stateClass: { new (fsm: IFsm<T>): IFsmState }, msg?: IFsmMessage<any, any>): void;

    /**
     * 获取当前状态
     */
    getCurrentState(): IFsmState;

    /**
     * 执行
     * @param msg 
     */
    execute(msg?: IFsmMessage<any, any>): void;

    /**
     * 设置状态机实体
     * @param entity 
     */
    setEntity(entity: IFsmEntity<T>): void;

    /**
     * 获取状态机实体
     */
    getEntity(): any;
}