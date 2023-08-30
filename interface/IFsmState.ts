import IFsmMessage from "./IFsmMessage";

export default interface IFsmState {
    /**
     * 进入状态
     * @param msg 
     */
    onEnter(msg?: IFsmMessage<any, any>): void;

    /**
     * 更新状态
     * @param dt 
     * @param msg 
     */
    onUpdate(dt: number, msg?: IFsmMessage<any, any>): void;

    /**
     * 执行状态
     * @param msg 
     */
    onExecute(msg?: IFsmMessage<any, any>): void;

    /**
     * 离开状态
     * @param msg 
     */
    onExit(msg?: IFsmMessage<any, any>): void;

    /**
     * 获取状态名
     */
    getStateName(): string;
}