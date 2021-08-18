import screenWidth from "../ts/screenWidth.type";
export default class  itemsPerScreenWidth {
    readonly desktop: number = 4;
    readonly tablet: number = 2;
    readonly mobile: number = 1;
    public static calc(screenWidth: screenWidth): number {
        return new itemsPerScreenWidth()[screenWidth] || new itemsPerScreenWidth().desktop;
    }
}