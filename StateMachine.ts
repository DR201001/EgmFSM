import IFsmMessage from "./interface/IFsmMessage";
import IFsm from "./interface/IFsm";
import IFsmState from "./interface/IFsmState";
import IEntity from "./interface/IEntity";

export default class StateMachine<T> implements IFsm<T> {
    private curState: IFsmState = undefined;

    // 状态机实体
    private entity: IEntity<T> = undefined;

    onUpdate(dt: number, msg?: IFsmMessage<string, any>): void {
        this.getCurrentState()?.onUpdate(dt, msg);
    }

    changeState(state: new (fsm: IFsm<T>) => IFsmState, msg?: IFsmMessage<string, any>): void {
        console.log(`[FSM] StateMachine changeState to ${state.name} state.`);

        if (state == null || state == undefined) {
            throw new Error("[FSM] StateMachine changeState with invaild state.");
        }

        console.debug(`[FSM] StateMachine old state ${this.getCurrentState()?.getStateName()} will exit.`);
        this.getCurrentState()?.onExit(msg);
        console.debug(`[FSM] StateMachine old state ${this.getCurrentState()?.getStateName()} was exited.`);

        this.setCurrentState(new state(this));

        console.debug(`[FSM] StateMachine new state ${state.name} will enter.`);
        this.getCurrentState()?.onEnter(msg);
    }

    getCurrentState(): IFsmState {
        // console.log("[FSM] StateMachine getCurrentState:", this.curState);

        return this.curState;
    }

    execute(msg?: IFsmMessage<string, any>): void {
        console.log(`[FSM] StateMachine execute with message:`, msg);
        console.debug(`[FSM] StateMachine state ${this.getCurrentState()?.getStateName()} will execute.`, msg);

        this.getCurrentState()?.onExecute(msg);
    }

    protected setCurrentState(state: IFsmState): void {
        console.debug(`[FSM] StateMachine setCurrentState ${state?.getStateName()}.`);

        this.curState = state;
    }

    setEntity(entity: IEntity<T>): void {
        console.log(`[FSM] StateMachine setEntity`, entity);

        if (entity == null || entity == undefined) {
            throw new Error("[FSM] StateMachine setEntity with invaild entity.");
        }

        this.entity = entity;
    }

    getEntity(): any {
        // console.log(`[FSM] StateMachine getEntity`, this.entity);
        
        return this.entity;
    }
}