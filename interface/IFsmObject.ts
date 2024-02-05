import IFsmMessage from "./IFsmMessage";

export default interface IFsmObject {
    /**
     * 通知状态机
     * @param msg 
     */
    notifyToFsm(msg: IFsmMessage<any, any>): void;

    /**
     * 通知实体
     * @param msg 
     */
    notifyToEntity(msg: IFsmMessage<any, any>): void;

    /**
     * 执行逻辑
     * @param msg 
     */
    execute(msg?: IFsmMessage<any, any>): void;
}