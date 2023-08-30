export default interface IFsmMessage<K, V> {
    set(key: K, value: V): void;

    get(key: K): V;

    del(key: K): boolean;

    contain(key: K): boolean;
}