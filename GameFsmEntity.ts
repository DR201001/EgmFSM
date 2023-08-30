import StateMachine from "./StateMachine";
import IEntity from "./interface/IEntity";
import IFsm from "./interface/IFsm";
import IFsmMessage from "./interface/IFsmMessage";

export default abstract class GameFsmEntity<T> implements IEntity<T> {
    private fsm: IFsm<T> = null;

    private obj: T = null;

    constructor(gameObj: T) {
        this.setFsm(new StateMachine());
        this.bindGameObject(gameObj);
    }

    public setFsm(fsm: IFsm<T>): void {
        console.log("[FSM] GameFsmEntity setFsm:", fsm);

        if (fsm == null || fsm == undefined) {
            throw new Error("[FSM] GameFsmEntity setFsm failed, the fsm was invailed.");
        }

        this.fsm = fsm;
        this.fsm.setEntity(this);
    }

    public getFsm(): IFsm<T> {
        if (this.fsm == null || this.fsm == undefined) {
            throw new Error("[FSM] GameFsmEntity getFsm failed, the fsm was invailed.");
        }
        // console.log("[FSM] GameFsmEntity getFsm:", this.fsm);

        return this.fsm;
    }

    public bindGameObject(object: T): void {
        console.log("[FSM] GameFsmEntity bindGameObject:", object);

        if (object == null || object == undefined) {
            throw new Error("[FSM] GameFsmEntity bindGameObject failed, the object was invailed.");
        }

        this.obj = object;
    }

    public getGameObject(): T {
        if (this.obj == null || this.obj == undefined) {
            throw new Error("[FSM] GameFsmEntity getGameObject failed, the object was invailed.");
        }
        // console.log("[FSM] GameFsmEntity getGameObject:", this.obj);

        return this.obj;
    }

    public notifyToFsm(msg: IFsmMessage<string, any>): void {
        console.log("[FSM] GameFsmEntity notifyToFsm:", msg);

        this.fsm.execute(msg);
    }

    public notifyToEntity(msg: IFsmMessage<any, any>): void {
        console.log("[FSM] GameFsmEntity notifyToEntity:", msg);
    }

    public onUpdate(dt: number, msg?: IFsmMessage<string, any>): void {
        this.fsm?.onUpdate(dt, msg);
    }

    public abstract notifyToObject(msg: IFsmMessage<string, any>): void;
}