export class Utility {
  public static rotate<T>(places: number, array: Array<T>): Array<T> {
    var len = array.length;
    return !(places % len)
      ? array.slice()
      : array.map((e, i, a) => a[(i + (len + (places % len))) % len]);
  }
}
