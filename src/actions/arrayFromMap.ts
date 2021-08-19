export default function arrayFromMap(map: Map<any, any>): any {
    return Array.from(map, ([name, value]) => value);
}