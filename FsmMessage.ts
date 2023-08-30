import IFsmMessage from "./interface/IFsmMessage";

export default class FsmMessage<K, V> implements IFsmMessage<K, V> {
    private msgMap: Map<K, V> = new Map();

    constructor(key?: K, value?: V) {
        if (key != null && value != null) {
            this.set(key, value);
        }
    }

    set(key: K, value: V): void {
        console.log(`[FSM] FsmMessage set key: ${key}, value:`, value);

        this.msgMap.set(key, value);
    }

    get(key: K): V {
        console.log(`[FSM] FsmMessage get key: ${key}, value:`, this.msgMap.get(key));

        return this.msgMap.get(key);
    }

    del(key: K): boolean {
        console.log(`[FSM] FsmMessage del key: ${key}`);

        return this.msgMap.delete(key);
    }

    contain(key: K): boolean {
        return this.msgMap.has(key);
    }
}