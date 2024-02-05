import IFsmMessage from "../interface/IFsmMessage";

export default class FsmMessage<K, V> implements IFsmMessage<K, V> {
    private msgMap: Map<K, V> = new Map<K, V>();

    constructor(key?: K, value?: V) {
        if (key != null && value != null) {
            this.set(key, value);
        }
    }

    public set(key: K, value: V): void {
        console.log(`[FSM] FsmMessage set key: ${key}, value:`, value);

        this.msgMap.set(key, value);
    }

    public get(key: K): V {
        console.log(`[FSM] FsmMessage get key: ${key}, value:`, this.msgMap.get(key));

        const result: any = this.msgMap.get(key);

        return result;
    }

    public del(key: K): boolean {
        console.log(`[FSM] FsmMessage del key: ${key}`);

        return this.msgMap.delete(key);
    }

    public contain(key: K): boolean {
        return this.msgMap.has(key);
    }
}