import IFsmMessage from "./interface/IFsmMessage";
import IFsm from "./interface/IFsm";
import IFsmState from "./interface/IFsmState";
import IEntity from "./interface/IEntity";

export default abstract class FsmState<T> implements IFsmState {
    protected machine: IFsm<T> = undefined;

    constructor(machine: IFsm<T>) {
        this.machine = machine;
    }

    public onUpdate(dt: number, msg?: IFsmMessage<string, any>): void {

    }

    protected getEntity(): IEntity<T> {
        return this.machine?.getEntity();
    }

    /**
     * 获取游戏对象
     * @returns 
     */
    protected getGameObject(): T {
        return this.getEntity()?.getGameObject();
    }

    /**
     * 通知游戏实体
     * @param msg 消息
     */
    protected notifyToObject(msg: IFsmMessage<any, any>): void {
        this.getEntity()?.notifyToObject(msg);
    }

    public abstract onEnter(msg?: IFsmMessage<string, any>): void;

    public abstract onExecute(msg?: IFsmMessage<string, any>): void;
    
    public abstract onExit(msg?: IFsmMessage<string, any>): void;

    public abstract getStateName(): string;
}