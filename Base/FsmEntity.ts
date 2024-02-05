import StateMachine from "./StateMachine";
import IFsmEntity from "../interface/IFsmEntity";
import IFsm from "../interface/IFsm";
import IFsmMessage from "../interface/IFsmMessage";

/**
 * 状态机实体
 */
export default abstract class FsmEntity<T> implements IFsmEntity<T> {
    private fsm: IFsm<T>;

    private obj: T;

    constructor(gameObj: T) {
        this.setFsm(new StateMachine());
        this.bindObject(gameObj);
    }

    public setFsm(fsm: IFsm<T>): void {
        console.log("[FSM] FsmEntity setFsm:", fsm);

        if (fsm == null || fsm == undefined) {
            throw new Error("[FSM] FsmEntity setFsm failed, the fsm was invailed.");
        }

        this.fsm = fsm;
        this.fsm.setEntity(this);
    }

    public getFsm(): IFsm<T> {
        if (this.fsm == null || this.fsm == undefined) {
            throw new Error("[FSM] FsmEntity getFsm failed, the fsm was invailed.");
        };

        return this.fsm;
    }

    public bindObject(object: T): void {
        console.log("[FSM] FsmEntity bindObject:", object);

        if (object == null || object == undefined) {
            throw new Error("[FSM] FsmEntity bindObject failed, the object was invailed.");
        };

        this.obj = object;
    }

    public getObject(): T {
        if (this.obj == null || this.obj == undefined) {
            throw new Error("[FSM] FsmEntity getObject failed, the object was invailed.");
        };

        return this.obj;
    }

    public notifyToFsm(msg: IFsmMessage<string, any>): void {
        console.log("[FSM] FsmEntity notifyToFsm:", msg);

        this.fsm.execute(msg);
    }

    public abstract notifyToObject(msg: IFsmMessage<string, any>): void;

    public onUpdate(dt: number, msg?: IFsmMessage<string, any>): void {
        this.fsm?.onUpdate(dt, msg);
    }
}