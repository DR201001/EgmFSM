import IFsmMessage from "../interface/IFsmMessage";
import IFsm from "../interface/IFsm";
import IFsmState from "../interface/IFsmState";
import IFsmEntity from "../interface/IFsmEntity";

export default abstract class FsmState<T> implements IFsmState {
    protected machine: IFsm<T>;

    constructor(machine: IFsm<T>) {
        this.machine = machine;
    }

    public onUpdate(dt: number, msg?: IFsmMessage<string, any>): void {

    }

    protected getEntity(): IFsmEntity<T> {
        return this.machine?.getEntity();
    }

    /**
     * 通知状态机对象
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